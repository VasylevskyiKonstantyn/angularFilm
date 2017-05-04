"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const film_card_service_1 = require("./film-card.service");
let FilmCardComponent = class FilmCardComponent {
    constructor(filmCardService) {
        this.filmCardService = filmCardService;
        this.filmList = [];
    }
    ngOnInit() {
        this.filmName = "Matrix";
        this.getFilms();
    }
    getFilms() {
        if (!this.filmName) {
            return;
        }
        this.filmCardService.getFilms(this.filmName).subscribe(data => {
            this.filmList = data;
        });
    }
};
FilmCardComponent = __decorate([
    core_1.Component({
        selector: 'appfilmcard',
        templateUrl: 'app/film-card/film-card.component.html',
        styleUrls: ['app/film-card/film-card.component.css']
    }),
    __metadata("design:paramtypes", [film_card_service_1.FilmCardService])
], FilmCardComponent);
exports.FilmCardComponent = FilmCardComponent;
//# sourceMappingURL=film-card.component.js.map