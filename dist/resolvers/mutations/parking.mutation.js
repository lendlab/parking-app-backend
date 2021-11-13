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
exports.ParkingMutation = void 0;
const type_graphql_1 = require("type-graphql");
const parking_entity_1 = require("../../entity/parking.entity");
const parking_response_1 = require("../../errors/parking.response");
const parking_input_1 = require("../../inputs/parking.input");
let ParkingMutation = class ParkingMutation {
    async createParking(optinons) {
        const parking = await parking_entity_1.Parking.create(Object.assign({}, optinons)).save();
        return { parking };
    }
    async deleteParking(parking_id) {
        await parking_entity_1.Parking.delete(parking_id);
        return true;
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => parking_response_1.ParkingResponse, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("options", () => parking_input_1.ParkingInput)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [parking_input_1.ParkingInput]),
    __metadata("design:returntype", Promise)
], ParkingMutation.prototype, "createParking", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("parking_id", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ParkingMutation.prototype, "deleteParking", null);
ParkingMutation = __decorate([
    (0, type_graphql_1.Resolver)()
], ParkingMutation);
exports.ParkingMutation = ParkingMutation;
//# sourceMappingURL=parking.mutation.js.map