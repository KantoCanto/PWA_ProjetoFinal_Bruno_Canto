import responseHandler from "../handlers/response.handler.js";
import tmdbAPI from "../tmdb/tmdb.api.js";
import userModel from "../models/user.model.js";
import favoriteModel from "../models/favorite.model.js";
import reviewModel from "../models/review.model.js";
import tokenMiddleware from "../middlewares/token.middleware.js";

const getList = async (req, res) => {
    try{
        const { page } = req.query;
        const { mediaType, mediaCategory } = req.params
        
        const response = await tmdbAPI.mediaList({mediaType, mediaCategory, page})

        return responseHandler.ok(res, response)
    }catch{
        responseHandler.error(res)
    }
}

const getGenre = async (req, res) => {
    try{
        const { mediaType } = req.params;

        const response = await tmdbAPI.mediaGenre({mediaType})

        return responseHandler.ok(res, response)
    }catch{
        responseHandler.error(res)
    }
}

const search = async (req, res) => {
    try{
        const { mediaType } = req.params;
        const { query, page } = req.query;
        
        const response = await tmdbAPI.mediaSearch({
            mediaType: mediaType === "people" ? "person" : mediaType, 
            query, 
            page
        })

        return responseHandler.ok(res, response)
    } catch{
        responseHandler.error(res)
    }
}

const getDetail = async (req, res) => {
    try{
        const { mediaType, mediaId } = req.params;
        const params = {mediaType, mediaId};
       
        const media = await tmdbAPI.mediaDetail(params);
        media.credits = await tmdbAPI.mediaCredits(params);

        const videos = await tmdbAPI.mediaVideos(params);
        media.videos = videos;

        const recommend = await tmdbAPI.mediaRecommend(params);
        media.recommend = recommend;

        media.image = await tmdbAPI.mediaImage(params);

        const tokenDecoded = tokenMiddleware.tokenDecode(req);

        if(tokenDecoded){
            const user = await userModel.findById(tokenDecoded.data);
            
            if(user){
                const isFavorite = await favoriteModel.findOne({
                    user: user.id,
                    mediaId
                })
                media.isFavorite = isFavorite !== null;
            }
        }

        media.reviews = await reviewModel.find({mediaId}).populate("user").sort("-createdAt");

        responseHandler.ok(res, media)
    }catch{
        responseHandler.error(res)
    }
}

export default{
    getList,
    getGenre,
    search,
    getDetail
}