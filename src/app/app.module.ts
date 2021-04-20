import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Material design
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from "@angular/common/http";
import { MatMenuModule } from "@angular/material/menu";

//
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FavButtonComponent } from './fav-button/fav-button.component';
import { PresentationComponent } from './presentation/presentation.component';
import { HeaderComponent } from './header/header.component';
import { BubbleComponent } from './bubble/bubble.component';
import { KnowledgeComponent } from './knowledge/knowledge.component'

@NgModule({
  declarations: [
    AppComponent,
    FavButtonComponent,
    PresentationComponent,
    HeaderComponent,
    BubbleComponent,
    KnowledgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
