import hookFetch, {type HookFetchPlugin} from 'hook-fetch';

interface BaseResponse {
    code: number;
    data: never;
    msg: string;
    rows: never;
}

export const request = hookFetch.create<BaseResponse, 'data' | 'rows'>({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: import.meta.env.VITE_API_TIMEOUT,
    headers: {
        'Content-Type': 'application/json',
    }
});

function jwt_plugin():HookFetchPlugin<BaseResponse>{
    return {
        name: 'jwt',
        beforeRequest: async (config) => {
            console.log('发起请求:', config.url);
            return config;
        },
        afterResponse: async (response) => {
            console.log('响应状态:', response.response.status);
            return response;
        },
    };
}

request.use(jwt_plugin());

export const post = request.post;

export const get = request.get;

export const put = request.put;

export const del = request.delete;

export default request;