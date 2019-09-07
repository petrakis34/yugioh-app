export class AppEndpoints {

    private static ygoPricesApiUrl: string = "https://yugiohprices.com/api/";
    public static cardData: string = AppEndpoints.ygoPricesApiUrl + "card_data/param";
    public static cardImage: string = AppEndpoints.ygoPricesApiUrl + "card_image/param";

    public static setUrlParameters(endpoint: string, params: string[]) {
        params.forEach(p => {
            endpoint = endpoint.replace('param', p);
        }) 

        return endpoint;
    }
}

