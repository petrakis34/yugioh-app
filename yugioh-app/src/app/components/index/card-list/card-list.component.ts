import { Component, Input, Output,EventEmitter, SimpleChanges, OnChanges, ChangeDetectorRef } from "@angular/core";
import { Card } from 'src/app/classes/models/card';

@Component({
    selector: 'card-list',
    templateUrl: './card-list.component.html'
})

export class CardListComponent implements OnChanges{
    @Input()
    cardList: Card[];

    @Output()
    onCardClicked = new EventEmitter<string>();

    ngOnChanges(changes: SimpleChanges){
        if(changes.cardList && changes.cardList.currentValue) {
            this.cardList = changes.cardList.currentValue;
        }
    }

    private cardClicked(card: Card) {
        this.onCardClicked.emit(card.name);
    }
}