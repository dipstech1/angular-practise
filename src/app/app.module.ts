import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {StoreModule, ActionReducerMap} from "@ngrx/store";
import * as tutorialReducer  from './reducers/tutorial.reducer';
import { TutorialComponent } from './components/withouteffect/tutorial/tutorial.component';
import { AppState } from './app.state';
import { DynamicformComponent } from './components/dynamicform/dynamicform.component';
import { TestingComponent } from './components/jasmine/testing/testing.component';

const rootReducer : ActionReducerMap<any> = {
  turotials : tutorialReducer.reducer
}

@NgModule({
  declarations: [
    AppComponent,
    TutorialComponent,
    DynamicformComponent,
    TestingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    StoreModule.forRoot(rootReducer),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
