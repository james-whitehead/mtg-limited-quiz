import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
    providedIn: 'root'
})
export class ScryfallService {
    card = { 
        "object": "card",
        "id": "",
        "oracle_id": "",
        "multiverse_ids": [],
        "mtgo_id": 0,
        "arena_id": 0,
        "tcgplayer_id": 0,
        "name": "",
        "lang":"en",
        "released_at":" ",
        "uri": "",
        "scryfall_uri": "",
        "layout": "normal",
        "highres_image": false,
        "image_uris": { 
           "small": "",
           "normal": "",
           "large": "",
           "png": "",
           "art_crop": "",
           "border_crop": ""
        },
        "mana_cost": "",
        "cmc": 0.0,
        "type_line": "",
        "oracle_text": "",
        "power": "",
        "toughness": "",
        "colors": [],
        "color_identity": [],
        "legalities": { 
           "standard": "",
           "future": "",
           "historic": "",
           "pioneer": "",
           "modern": "",
           "legacy": "",
           "pauper": "",
           "vintage": "",
           "penny": "",
           "commander": "",
           "brawl": "",
           "duel": "",
           "oldschool": ""
        },
        "games": [],
        "reserved": false,
        "foil": false,
        "nonfoil": false,
        "oversized": false,
        "promo": false,
        "reprint": false,
        "variation": false,
        "set": "",
        "set_name": "",
        "set_type": "",
        "set_uri": "",
        "set_search_uri": "",
        "scryfall_set_uri": "",
        "rulings_uri": "",
        "prints_search_uri": "",
        "collector_number": "",
        "digital": false,
        "rarity": "",
        "card_back_id": "",
        "artist": "",
        "artist_ids":[],
        "illustration_id": "",
        "border_color": "",
        "frame": "",
        "full_art": false,
        "textless": false,
        "booster": false,
        "story_spotlight": false,
        "edhrec_rank": 0,
        "preview": { 
           "source": "",
           "source_uri": "",
           "previewed_at": ""
        },
        "prices": { 
           "usd": "",
           "usd_foil": "",
           "eur": "",
           "tix": ""
        },
        "related_uris": { 
           "gatherer": "",
           "tcgplayer_decks": "",
           "edhrec": "",
           "mtgtop8": ""
        },
        "purchase_uris": { 
           "tcgplayer": "",
           "cardmarket": "",
           "cardhoarder": ""
        }
     }

    getCard() {
        return this.card;
    }

    getRandomCard(set: string) {
        /*this.card = this.http
            .get(`https://api.scryfall.com/cards/random?q=set%3A${set}`)
            .pipe(map((response: any ) => response.json);
        console.log(this.http.get(`https://api.scryfall.com/cards/random?q=set%3A${set}`));
        let c = this.http.get(`https://api.scryfall.com/cards/random?q=set%3A${set}`);
        console.log(c.pipe(map((response: any ) => response.json)));*/
        return this.http.get<any>(`https://api.scryfall.com/cards/random?q=set%3A${set}&-type:land`);
    }

    constructor(
        private http: HttpClient
    ) {}
}