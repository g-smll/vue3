import hookFetch from 'hook-fetch';

interface BaseResponse {
    code: number;
    data: never;
    msg: string;
    rows: never;
}

export const request = hookFetch.create<BaseResponse, 'data' | 'rows'>({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

export const post = request.post;

export const get = request.get;

export const put = request.put;

export const del = request.delete;

export default request;