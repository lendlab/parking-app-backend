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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaceQuerys = void 0;
const place_entity_1 = require("../../entity/place.entity");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
let PlaceQuerys = class PlaceQuerys {
    async getPlaceByParkingId(parking_id) {
        return await (0, typeorm_1.getRepository)(place_entity_1.Place)
            .createQueryBuilder("place")
            .innerJoinAndSelect("place.parking", "parking")
            .where(`parking.parking_id = ${parking_id}`)
            .getMany();
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [place_entity_1.Place], { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("parking_id", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PlaceQuerys.prototype, "getPlaceByParkingId", null);
PlaceQuerys = __decorate([
    (0, type_graphql_1.Resolver)()
], PlaceQuerys);
exports.PlaceQuerys = PlaceQuerys;
//# sourceMappingURL=place.query.js.map