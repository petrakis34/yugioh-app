import { Component, OnInit } from "@angular/core";
import { Card } from 'src/app/classes/models/card';
import { HttpService } from 'src/app/services/http.service';

@Component({
    selector: 'index',
    templateUrl: './index.component.html'
})

export class IndexComponent implements OnInit{
    public cards: Card[] = [];
    public blueEyesArchetype: string = 'Blue-Eyes';

    constructor(private httpService: HttpService){}

    ngOnInit() {
        this.getCardsBlueEyesArchetype()
    }

    private getCardsBlueEyesArchetype() {
        this.httpService.getCardInfoByArchetype(this.blueEyesArchetype)
        .subscribe(cardsResp => {
            if(cardsResp && cardsResp.length) {
                cardsResp.forEach(c => this.cards.push(c));
            } else {
                console.log("sth went wrong");
            }
            console.log('resp' + JSON.stringify(this.cards));
        })
    }
}