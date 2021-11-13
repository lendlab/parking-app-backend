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
exports.ParkingResponse = void 0;
const type_graphql_1 = require("type-graphql");
const parking_entity_1 = require("../entity/parking.entity");
let ParkingErrors = class ParkingErrors {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], ParkingErrors.prototype, "path", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], ParkingErrors.prototype, "message", void 0);
ParkingErrors = __decorate([
    (0, type_graphql_1.ObjectType)()
], ParkingErrors);
let ParkingResponse = class ParkingResponse {
};
__decorate([
    (0, type_graphql_1.Field)(() => [ParkingErrors], { nullable: true }),
    __metadata("design:type", Array)
], ParkingResponse.prototype, "errors", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => parking_entity_1.Parking, { nullable: true }),
    __metadata("design:type", parking_entity_1.Parking)
], ParkingResponse.prototype, "parking", void 0);
ParkingResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], ParkingResponse);
exports.ParkingResponse = ParkingResponse;
//# sourceMappingURL=parking.response.js.map