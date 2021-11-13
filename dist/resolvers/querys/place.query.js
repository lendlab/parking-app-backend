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
exports.PlaceQuerys = void 0;
const place_entity_1 = require("../../entity/place.entity");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
let PlaceQuerys = class PlaceQuerys {
    async getPlacesList() {
        const places = await place_entity_1.Place.find();
        return places;
    }
    async getAvaliblePlaceList() {
        const places = await (0, typeorm_1.getRepository)(place_entity_1.Place)
            .createQueryBuilder("place")
            .where("place.occuped = false")
            .getMany();
        return places;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [place_entity_1.Place], { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PlaceQuerys.prototype, "getPlacesList", null);
__decorate([
    (0, type_graphql_1.Query)(() => [place_entity_1.Place], { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PlaceQuerys.prototype, "getAvaliblePlaceList", null);
PlaceQuerys = __decorate([
    (0, type_graphql_1.Resolver)()
], PlaceQuerys);
exports.PlaceQuerys = PlaceQuerys;
//# sourceMappingURL=place.query.js.map