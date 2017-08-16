/*
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HeroDetailComponent} from "./hero-detail.component";

@NgModule({
declarations : [AppComponent, HeroDetailComponent],
imports : [BrowserModule,
  FormsModule],
providers : [],
bootstrap : [AppComponent]})

export class AppModule { }
