"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const film_card_service_1 = require("./film-card.service");
describe('FilmCardService', () => {
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [film_card_service_1.FilmCardService]
        });
    });
    it('should ...', testing_1.inject([film_card_service_1.FilmCardService], (service) => {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=film-card.service.spec.js.map