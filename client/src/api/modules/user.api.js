import privateClient from "../client/private.client";
import publicClient from "../client/public.client";

const userEndpoints = {
    register: "user/register",
    login: "user/login",
    getInfo: "user/info",
    passwordUpdate: "user/update-password",
}


const userAPI = {
    register: async ({username, password, confirmPassword, displayName}) => {
        try{
            const response = await publicClient.post(
                userEndpoints.register,
                {username, password, confirmPassword, displayName}
            )

            return {response};
        }catch(err){
            return {err}
        }
    },
    login: async ({username, password}) => {
        try{
            const response = await publicClient.post(
                userEndpoints.login,
                {username, password}
            )

            return {response};
        }catch(err){
            return {err}
        }
    },
    getInfo: async () => {
        try{
            const response = await privateClient.get(
                userEndpoints.getInfo
            )

            return {response};
        }catch(err){
            return {err}
        }
    },
    passwordUpdate: async ({password, newPassword, confirmNewPassword}) => {
        try{
            const response = await privateClient.put(
                userEndpoints.passwordUpdate,
                {password, newPassword, confirmNewPassword}
            )

            return {response};
        }catch(err){
            return {err}
        }
    },
}

export default userAPI;