import Axios, { AxiosInstance, AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';

export default class APIConnector {
    constructor(url: string, user: string, password: string) {
        this.url = url;
        this.user = user;
        this.password = password;

        this.connection = Axios.create({
            baseURL: this.url,
            responseType: 'json',
            headers: {
                'Content-Type': 'application/json',
            },
            auth: {
                username: this.user,
                password: this.password,
            },
        });
    }

    async getRequest<T>(path: string): Promise<T> {
        return this.connection
            .get(path)
            .then((response) => {
                return response.data as T;
            })
            .catch((e) => {
                return Promise.reject(`GET request rejected. Error: ${e}`);
            });
    }

    async postRequest<T>(path: string, body: T): Promise<AxiosResponse> {
        const config: AxiosRequestConfig = { headers: { 'Content-Type': 'application/json' } };
        return this.connection
            .post(path, body, config)
            .then((response) => {
                return response;
            })
            .catch((e) => {
                return Promise.reject(`GET request rejected. Error: ${e}`);
            });
    }

    private connection: AxiosInstance;
    private url: string;
    private user: string;
    private password: string;
}
