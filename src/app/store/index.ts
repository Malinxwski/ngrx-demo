import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
  } from '@ngrx/store';

  import * as fromNews from './reducers/news.reducer'

  export interface State {
    news: fromNews.State
  }

  // Собираем все состояние
  export const reducers: ActionReducerMap<State> = {
    news: fromNews.reducer,
  };

  // Получение "слоя" (а-ля модуля)
  export const getNewsState = createFeatureSelector<fromNews.State>('news')


  // Получение свойства из конкретного модуля
  export const selectNews = createSelector(
    getNewsState,
    state => state.items
    )
