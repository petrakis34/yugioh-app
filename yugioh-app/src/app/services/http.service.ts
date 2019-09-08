import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '../classes/models/card';
import { Observable, forkJoin } from 'rxjs';
import { AppEndpoints } from '../app.endpoints';
import { CardResponse } from '../classes/responses/card.response';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class HttpService {
    constructor(private http: HttpClient) { }
    public cardNames = ['Burial from a Different Dimension', 'Charge of the Light Brigade', 'Infernoid Antra',
        'Infernoid Attondel', 'Infernoid Decatron', 'Infernoid Devyaty', 'Infernoid Harmadik', 'Infernoid Onuncu',
        'Infernoid Patrulea','Infernoid Pirmais','Infernoid Seitsemas','Lyla, Lightsworn Sorceress',
        'Monster Gate','One for One','Raiden, Hand of the Lightsworn','Reasoning','Time-Space Trap Hole',
        'Torrential Tribute','Upstart Goblin','Void Seer'];

    public getCard(param: string): Observable<Card> {
        const headers = new HttpHeaders().set("Accept", "application/json");
        return this.http.get<CardResponse>(AppEndpoints.setUrlParameters(AppEndpoints.cardData, [param]), { headers })
            .pipe(map((cardResponse: CardResponse) => cardResponse.data));
    }

    public getCards(): Observable<Card[]> {
        let responseObservableArray = [];

        this.cardNames.forEach(c => {
            responseObservableArray.push(this.getCard(c));
        });

        return forkJoin(responseObservableArray);
    }
}