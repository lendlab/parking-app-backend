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
exports.ParkingQuerys = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const parking_entity_1 = require("../../entity/parking.entity");
const have_entity_1 = require("../../entity/have.entity");
let ParkingQuerys = class ParkingQuerys {
    async getParkings() {
        const parking = await (0, typeorm_1.getRepository)(parking_entity_1.Parking)
            .createQueryBuilder("parking")
            .getMany();
        return parking;
    }
    async getParkingsPlace(parking_id) {
        return await (0, typeorm_1.getRepository)(have_entity_1.Have)
            .createQueryBuilder("have")
            .innerJoinAndSelect("have.parking", "parking")
            .innerJoinAndSelect("have.place", "place")
            .where(`parking.parking_id = ${parking_id}`)
            .getMany();
    }
    async getAvaliblePlaceList2() {
        const places = await (0, typeorm_1.getRepository)(have_entity_1.Have)
            .createQueryBuilder("have")
            .innerJoinAndSelect("have.parking", "parking")
            .innerJoinAndSelect("have.place", "place")
            .where("place.occuped = false")
            .getMany();
        return places;
    }
    async getOcuppedPlaceList() {
        const places = await (0, typeorm_1.getRepository)(have_entity_1.Have)
            .createQueryBuilder("have")
            .innerJoinAndSelect("have.parking", "parking")
            .innerJoinAndSelect("have.place", "place")
            .where("place.occuped = true")
            .getMany();
        return places;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [parking_entity_1.Parking], { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ParkingQuerys.prototype, "getParkings", null);
__decorate([
    (0, type_graphql_1.Query)(() => [have_entity_1.Have], { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("parking_id", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ParkingQuerys.prototype, "getParkingsPlace", null);
__decorate([
    (0, type_graphql_1.Query)(() => [have_entity_1.Have], { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ParkingQuerys.prototype, "getAvaliblePlaceList2", null);
__decorate([
    (0, type_graphql_1.Query)(() => [have_entity_1.Have], { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ParkingQuerys.prototype, "getOcuppedPlaceList", null);
ParkingQuerys = __decorate([
    (0, type_graphql_1.Resolver)()
], ParkingQuerys);
exports.ParkingQuerys = ParkingQuerys;
//# sourceMappingURL=parking.query.js.map