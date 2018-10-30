import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoadUser } from '../actions/user.actions';

import { defer, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserEffects {

  @Effect()
  load = defer(() =>
    timer(200).pipe(
      map(() => new LoadUser({ // https://www.json-generator.com/
        "_id": "5bd8eb11fb74aa89af01fb30",
        "index": 0,
        "guid": "2a668593-0c41-402a-bde4-7b7972f4f7ab",
        "isActive": true,
        "balance": "$2,827.37",
        "picture": "http://placehold.it/32x32",
        "age": 29,
        "eyeColor": "green",
        "name": "Amparo Rowe",
        "gender": "female",
        "company": "ZORROMOP",
        "email": "amparorowe@zorromop.com",
        "phone": "+1 (838) 590-2912",
        "address": "427 Powell Street, Odessa, Northern Mariana Islands, 6921",
        "about": "Enim officia tempor cillum laboris eu proident. Exercitation mollit nisi ex ex laborum ea est exercitation veniam minim culpa. Ullamco eu sint Lorem est tempor do aliqua anim enim.\r\n",
        "registered": "2014-06-22T11:29:30 -02:00",
        "latitude": -2.561312,
        "longitude": -31.831216,
        "tags": [
          "mollit",
          "minim",
          "enim",
          "ea",
          "est",
          "occaecat",
          "consectetur"
        ],
        "friends": [
          {
            "id": 0,
            "name": "Earlene Maddox"
          },
          {
            "id": 1,
            "name": "Kasey Rosales"
          },
          {
            "id": 2,
            "name": "Haley Mckay"
          }
        ],
        "greeting": "Hello, Amparo Rowe! You have 10 unread messages.",
        "favoriteFruit": "banana"
      }))
    )
  )

  constructor(private actions$: Actions) {}
}
