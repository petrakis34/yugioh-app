import { environment } from 'src/environments/environment';

export class AppEndpoints {
    
    private _baseUrl = `${environment.protocol}://${environment.hostname}:${environment.port}`;
    private static apiPrefix: string = "/api/";
    public static cardData: string = AppEndpoints.apiPrefix + "card_data/param";
    public static cardImage: string = AppEndpoints.apiPrefix + "card_image/param";

    public static setUrlParameters(endpoint: string, params: string[]) {
        params.forEach(p => {
            endpoint = endpoint.replace('param', p);
        }) 

        return endpoint;
    }
}

