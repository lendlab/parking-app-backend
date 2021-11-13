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
exports.ReservationMutation = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const place_entity_1 = require("../../entity/place.entity");
const place_input_1 = require("../../inputs/place.input");
const reservate_response_1 = require("../../errors/reservate.response");
let ReservationMutation = class ReservationMutation {
    async confirmReservation(place_id, options) {
        const place = await (0, typeorm_1.getRepository)(place_entity_1.Place)
            .createQueryBuilder("place")
            .innerJoinAndSelect("place.parking", "parking")
            .where(`place.place_id = ${place_id}`)
            .getOne();
        if (options.occuped === true) {
            await place_entity_1.Place.update({ place_id }, options);
        }
        else {
            console.log("ocurrio un error");
        }
        return { place };
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => reservate_response_1.ReservateResponse, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("place_id", () => type_graphql_1.Int)),
    __param(1, (0, type_graphql_1.Arg)("options", () => place_input_1.Reservates)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, place_input_1.Reservates]),
    __metadata("design:returntype", Promise)
], ReservationMutation.prototype, "confirmReservation", null);
ReservationMutation = __decorate([
    (0, type_graphql_1.Resolver)()
], ReservationMutation);
exports.ReservationMutation = ReservationMutation;
//# sourceMappingURL=reservation.mutation.js.map