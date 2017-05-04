"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const film_card_component_1 = require("./film-card/film-card.component");
exports.routes = [
    { path: "", redirectTo: "appfilmcard", pathMatch: "full" },
    { path: "appfilmcard", component: film_card_component_1.FilmCardComponent },
];
//# sourceMappingURL=app.routes.js.map