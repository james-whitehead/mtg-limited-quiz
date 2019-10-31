import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sets } from '../../assets/sets'
import { ScryfallService } from '../scryfall.service';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
    set = sets.find(s => s.code === this.router.url.substring(1));
    cardImg = '../../assets/cardback.png'
    constructor(
        private router: Router,
        private scryfallService: ScryfallService
    ) {}

    nextCard() {
        this.cardImg = '../../assets/cardback.png'
        this.scryfallService.getRandomCard(this.set.code).subscribe(data => {
            this.cardImg = data.image_uris.normal;
        });
    }
    ngOnInit() {
        this.scryfallService.getRandomCard(this.set.code).subscribe(data => {
            this.cardImg = data.image_uris.normal;
            console.log(this.cardImg);
        });
    }
}
