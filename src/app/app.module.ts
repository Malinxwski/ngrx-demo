import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

//store
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NewsEffects } from './store/effects/news.effects';
import { reducers } from './store';

@NgModule({
  declarations: [
    AppComponent
  ],
  exports:[
    HttpClientModule
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, {}), //  Регистрируем редукторы
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([NewsEffects]) //  Регистрируем эффекты
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
