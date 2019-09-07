import { Card } from '../models/card';

export interface CardResponse {
    status: CardResponseStatus;
    data: Card;
}

export enum CardResponseStatus {
    Success = 'success',
    Fail = 'fail'
}