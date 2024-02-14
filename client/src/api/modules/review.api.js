import privateClient from "../client/private.client"

const reviewEndpoints = {
    getList: "reviews",
    add: "reviews",
    remove: ({reviewId}) => `reviews/${reviewId}`
}

const reviewAPI = {
    add: async({
        mediaId,
        mediaType,
        mediaTitle,
        mediaPoster,
        content
    }) => {
        try{
            const response = await privateClient.post(
            reviewEndpoints.add,
                {
                    mediaId,
                    mediaType,
                    mediaTitle,
                    mediaPoster,
                    content
                }
            )

            return {response};
        }catch(err){
            return {err}
        }
    },
    remove: async({reviewId}) => {
        try{
            const response = await privateClient.delete(
            reviewEndpoints.remove,
                {
                    reviewId
                }
            )

            return {response};
        }catch(err){
            return {err}
        }
    },
    getList: async() => {
        try{
            const response = await privateClient.get(
                reviewEndpoints.list
            )

            return {response};
        }catch(err){
            return {err}
        }
    }

}

export default reviewAPI;