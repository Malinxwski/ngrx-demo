import { Action, createReducer, on } from '@ngrx/store';
import { INewsResponse, INewsItem, ICategoryItem } from 'src/app/models/declarant';
import * as newsActions from '../actions/news.actions'


export interface State {
    items: INewsItem[],
    categories: ICategoryItem[],
    isLoading: boolean;
    isLoadingSuccess: boolean;
    isLoadingFailure: boolean;
}

export const initialState: State = {
    items:[],
    categories:[],
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingFailure: false
}

const newsReducer = createReducer(
    initialState,
    on(newsActions.getNews, (state) => {
        return {
            ...state, isLoading:true
        }
    }),
    on(newsActions.getNewsSuccess, (state, {response}) => ({
            ...response,
            isLoading:false,
            isLoadingSuccess:true,
            isLoadingFailure:false
        }
    ))
)


// Функция для возврата редуктора - чет для реактивности видимо
export function reducer(state: State | undefined, action: Action): any {
    return newsReducer(state, action);
}

// Селектор свойства
export const selectNews = (state:State) => state.items

