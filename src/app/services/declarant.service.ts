import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { INewsItem, INewsResponse } from '../models/declarant';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class DeclarantService {

  private link = 'https://declarant.by/rest/news'

  constructor(private http: HttpClient) { }

  getNews(): Observable<INewsResponse>{
    return this.http.get<INewsResponse>(this.link)
  }
}
