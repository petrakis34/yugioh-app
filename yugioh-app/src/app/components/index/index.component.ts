import { Component, OnInit } from "@angular/core";
import { Card } from 'src/app/classes/models/card';
import { HttpService } from 'src/app/services/http.service';

@Component({
    selector: 'index',
    templateUrl: './index.component.html'
})

export class IndexComponent implements OnInit {
    public cards: Card[] = [];
    public cardNames = [
        'Burial from a Different Dimension', 
        'Charge of the Light Brigade', 
        'Infernoid Antra',
        'Infernoid Attondel',
        'Infernoid Decatron', 
        'Infernoid Devyaty', 
        'Infernoid Harmadik', 
        'Infernoid Onuncu', 
        'Infernoid Patrulea', 
        'Infernoid Pirmais', 
        'Infernoid Seitsemas',
        'Lyla, Lightsworn Sorceress', 
        'Monster Gate',
        'One for One',
        'Raiden, Hand of the Lightsworn', 
        'Reasoning',
        'Time-Space Trap Hole', 
        'Torrential Tribute',
        'Upstart Goblin',
        'Void Seer'
    ];

    constructor(private httpService: HttpService) { }

    ngOnInit() {
        this.getCards()
    }

    private getCards() {
        this.cardNames.forEach(card => {
            this.httpService.getCard(card)
            .subscribe(cardResp => {
                console.log(cardResp);
            })
        })

    }
}