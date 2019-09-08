import { Component, Input } from "@angular/core";
import { Card } from 'src/app/classes/models/card';

@Component({
    selector: 'card-details',
    templateUrl: './card-details.component.html'
})

export class CardDetailsComponent {
    @Input()
    card: Card;
}