import { Routes } from "@angular/router";
import { FilmCardComponent } from "./film-card/film-card.component";



export const routes: Routes = [
    { path: "", redirectTo: "appfilmcard", pathMatch: "full" },
    { path: "appfilmcard",    component: FilmCardComponent },

];
