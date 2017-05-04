import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { MaterialModule } from '@angular/material';
//import {MdInputModule}    from '@angular/material';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


import { AppComponent } from "./app.component";

import { routes } from "./app.routes";
import {FilmCardComponent} from "./film-card/film-card.component";
import {FilmCardService} from "./film-card/film-card.service";

@NgModule({
    imports: [
        BrowserModule,
        MaterialModule,
        FormsModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        FilmCardComponent
    ],
    providers: [FilmCardService],
    bootstrap: [AppComponent]
})
export class AppModule { }
