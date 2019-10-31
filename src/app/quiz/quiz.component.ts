import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sets } from '../../assets/sets'

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
    set = sets.find(s => s.code === this.router.url.substring(1));
    constructor(
        private router: Router,
    ) {}

    ngOnInit() {}
}
