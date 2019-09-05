export class AppEndpoints {
    public static ygoprodeckApiUrl: string = "https://db.ygoprodeck.com/api/v5/";
    public static cardInfo: string = AppEndpoints.ygoprodeckApiUrl + "cardinfo.php?";
    public static archetypeFilter: string = AppEndpoints.cardInfo + "archetype=param";

    public static setUrlParameters(endpoint: string, params: string[]) {
        params.forEach(p => {
            endpoint = endpoint.replace('param', p);
        }) 

        return endpoint;
    }
}

