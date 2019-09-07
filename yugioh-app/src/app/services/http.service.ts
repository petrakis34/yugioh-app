import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '../classes/models/card';
import { Observable } from 'rxjs';
import { AppEndpoints } from '../app.endpoints';
import { CardResponse } from '../classes/responses/card.response';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class HttpService {
    constructor(private http: HttpClient) { }

    public getCard(param: string): Observable<Card> {
        return this.http.get<CardResponse>(AppEndpoints.setUrlParameters(AppEndpoints.cardData, [param]))
            .pipe(map((cardResponse: CardResponse) => cardResponse.data));
    }
}