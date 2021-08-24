import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { RedComponent } from './main/red/red.component';
import { GreenComponent } from './main/green/green.component';
import { BlueComponent } from './main/blue/blue.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MainContentComponent } from './main/main-content/main-content.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RedComponent,
    GreenComponent,
    BlueComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
