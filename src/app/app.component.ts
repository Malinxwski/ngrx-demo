import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { BehaviorSubject, fromEvent, Observable, Subject, switchMap, tap } from 'rxjs';
import {DeclarantService} from "./services/declarant.service";
import { INewsItem } from './models/declarant';
import { Store } from '@ngrx/store';
import { getNews } from './store/actions/news.actions';

import * as fromRoot from './store'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  result$: Observable<INewsItem[]> = this.store.select(fromRoot.selectNews)

  title = 'demo';

  @ViewChild('load') load !: ElementRef


  news$ = new BehaviorSubject<INewsItem[]>([])


  constructor(
    private declarant: DeclarantService,
    private store: Store
    ) {
  }

  public loadNews(){
    console.log('loadNews')
    this.store.dispatch(getNews())
  }

}
