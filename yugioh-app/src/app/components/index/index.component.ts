import { Component, OnInit } from "@angular/core";
import { Card } from 'src/app/classes/models/card';
import { HttpService } from 'src/app/services/http.service';
import { finalize } from 'rxjs/operators';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
    selector: 'index',
    templateUrl: './index.component.html'
})

export class IndexComponent implements OnInit {
    public card: Card = new Card();
    public cardList: Card[] = [];
    public isCardClicked = false;
    public listLoaded = false;

    constructor(private httpService: HttpService, private loader: NgxUiLoaderService) { }

    ngOnInit() {
        this.getCards();
    }

    private getCards() {
        if (this.cardList.length > 0) return;
        this.loader.start();
        this.httpService.getCards().pipe(
            finalize(() => {
                this.loader.stop();
                this.listLoaded = true;
            })
        ).subscribe(cardsResponse => {
            cardsResponse.forEach(c => this.cardList.push(c));
        })
    }

    public selectedCard(cardName: string) {
        if (cardName) {
            console.log(cardName);
            this.card = this.cardList.find(c => c.name === cardName);
            this.isCardClicked = true;
        }
    }

    public goHome() {
        this.isCardClicked = false;
    }
}