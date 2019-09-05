import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '../classes/models/card';
import { Observable, throwError } from 'rxjs';
import { AppEndpoints } from '../app.endpoints';

@Injectable({
    providedIn: 'root'
})

export class HttpService {
    constructor(private http: HttpClient) { }

    public getCardInfoByArchetype(param: string): Observable<Card[]> {
        return this.http.get<Card[]>(AppEndpoints.setUrlParameters(AppEndpoints.archetypeFilter, [param]));
    }
}