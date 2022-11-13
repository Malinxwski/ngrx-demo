import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { DeclarantService } from "src/app/services/declarant.service";
import * as newsActions from "../actions/news.actions"

@Injectable()
export class NewsEffects{

    constructor(
        private actions$: Actions,
        private declarant: DeclarantService
    ){}

    news$ = createEffect(() => 
        this.actions$.pipe(
            ofType(newsActions.getNews),
            exhaustMap(action => 
                 this.declarant.getNews().pipe(
                    // респонс с ключом тк в редукторе добавляется еще название экшена
                    map(response => newsActions.getNewsSuccess({response:response.data})),
                    catchError((err:any) => of(newsActions))
                )
            )
        )
    )
}


