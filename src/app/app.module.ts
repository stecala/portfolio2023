import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DarkModeComponent } from './components/dark-mode/dark-mode.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DarkModeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
