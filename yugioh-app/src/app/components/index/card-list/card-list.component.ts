import { Component, Input, Output,EventEmitter } from "@angular/core";

@Component({
    selector: 'card-list',
    templateUrl: './card-list.component.html'
})

export class CardListComponent {
    @Input()
    cardNames: string[];

    @Output()
    onCardClicked = new EventEmitter<string>();

    private cardClicked(card: string) {
        this.onCardClicked.emit(card);
    }
}