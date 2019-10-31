import { Component, OnInit } from '@angular/core';

import { sets } from '../../assets/sets';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit  {
    sets = sets;

    constructor() {}

    ngOnInit() {}
}