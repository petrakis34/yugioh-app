import { Component, Input, SimpleChanges } from "@angular/core";
import { Card } from 'src/app/classes/models/card';
import { AppEndpoints } from 'src/app/app.endpoints';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
    selector: 'card-details',
    templateUrl: './card-details.component.html'
})

export class CardDetailsComponent {
    @Input()
    card: Card;

    public image_url: string;

    constructor(private loader: NgxUiLoaderService) { }

    ngOnChanges(changes: SimpleChanges) {
        this.loader.startLoader('loader-01');
        if (changes.card && changes.card.currentValue) {
            this.card = changes.card.currentValue;
            this.image_url = AppEndpoints.setUrlParameters(AppEndpoints.cardImage, [this.card.name]);
            this.loader.stopLoader('loader-01');
        }
    }
}