import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '../classes/models/card';
import { Observable } from 'rxjs';
import { AppEndpoints } from '../app.endpoints';
import { CardResponse } from '../classes/responses/card.response';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class HttpService {
    constructor(private http: HttpClient) { }

    public getCard(param: string): Observable<Card> {
        const headers = new HttpHeaders().set("Accept", "application/json");
        return this.http.get<CardResponse>(AppEndpoints.setUrlParameters(AppEndpoints.cardData, [param]), { headers })
            .pipe(map((cardResponse: CardResponse) => cardResponse.data));
    }

    public getMockCard(): Observable<Card> {
        return this.http.get<CardResponse>('http://localhost:8000/apimock/card').pipe(map((cardResponse: CardResponse) => cardResponse.data));
    }
}