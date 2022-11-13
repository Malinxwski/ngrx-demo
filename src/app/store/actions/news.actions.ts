import { createAction, props } from "@ngrx/store";
import { INewsItem } from "src/app/models/declarant";


export const GET_NEWS = '[News Page] GetNews'
export const GET_NEWS_SUCCESS = '[News Page] GetNewsSuccess'
export const GET_NEWS_FAILURE = '[News Page] GetNewsFailure'


// на экшены подписываются эффекты

export const getNews = createAction(
    GET_NEWS
)

export const getNewsSuccess = createAction(
    GET_NEWS_SUCCESS,
    props<any>()
)

export const getNewsFailure = createAction(
    GET_NEWS_FAILURE,
    props<any>()
)
