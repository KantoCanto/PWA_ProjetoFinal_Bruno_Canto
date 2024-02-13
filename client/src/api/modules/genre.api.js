import publicClient from '../client/public.client';

const genreEndpoints = {
    list: ({mediaType}) => `${mediaType}/genres`
}

const genreAPI = {
    getList: async({mediaType}) => {
        try{
            const response = await publicClient.get(
                genreEndpoints.list({mediaType})
            )

            return {response};
        }catch(err){
            return {err}
        }
    }
}

export default genreAPI;