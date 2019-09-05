import { CardSet } from './card-set';
import { CardImage } from './card-image';
import { CardPrices } from './card-prices';

export class Card {
    id: string;
    name: string;
    type: string;
    desc: string;
    atk: string;
    def: string;
    level: string;
    race: string;
    attribute: string;
    archetype: string;
    card_sets: CardSet[];
    card_images: CardImage[];
    card_prices: CardPrices;
}