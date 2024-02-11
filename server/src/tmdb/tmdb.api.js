import axiosClient from "../axios/axios.client.js";
import tmdbEndpoints from "./tmdb.endpoints.js";


const tmdbAPI = {
    mediaList: async({mediaType, mediaCategory, page}) => axiosClient.get(
        tmdbEndpoints.mediaList({mediaType, mediaCategory, page})
    ),
    mediaDetail: async({mediaType, page}) => axiosClient.get(
        tmdbEndpoints.mediaDetail({mediaType, page})
    ),
    mediaGenres: async({mediaType}) => axiosClient.get(
        tmdbEndpoints.mediaGenres({mediaType})
    ),
    mediaCredits: async({mediaType, mediaId}) => axiosClient.get(
        tmdbEndpoints.mediaCredits({mediaType, mediaId})
    ),
    mediaVideos: async({mediaType, mediaId}) => axiosClient.get(
        tmdbEndpoints.mediaVideos({mediaType, mediaId})
    ),
    mediaRecommendations: async({mediaType, mediaId}) => axiosClient.get(
        tmdbEndpoints.mediaRecommendations({mediaType, mediaId})
    ),
    mediaSearch: async({mediaType, query, page}) => axiosClient.get(
        tmdbEndpoints.mediaSearch({mediaType, query, page})
    ),
    mediaReviews: async({mediaType, mediaId}) => axiosClient.get(
        tmdbEndpoints.mediaReviews({mediaType, mediaId})
    ),
    personDetail: async({personId}) => axiosClient.get(
        tmdbEndpoints.personDetail({personId})
    ),
    personMedias: async({personId}) => axiosClient.get(
        tmdbEndpoints.personMedias({personId})
    )
}