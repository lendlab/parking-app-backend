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
exports.Reservates = exports.PlaceInput = void 0;
const type_graphql_1 = require("type-graphql");
let Parking_ID = class Parking_ID {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Parking_ID.prototype, "parking_id", void 0);
Parking_ID = __decorate([
    (0, type_graphql_1.InputType)()
], Parking_ID);
let PlaceInput = class PlaceInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Boolean)
], PlaceInput.prototype, "occuped", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Parking_ID),
    __metadata("design:type", Parking_ID)
], PlaceInput.prototype, "parking", void 0);
PlaceInput = __decorate([
    (0, type_graphql_1.InputType)()
], PlaceInput);
exports.PlaceInput = PlaceInput;
let Reservates = class Reservates {
};
__decorate([
    (0, type_graphql_1.Field)(() => Boolean),
    __metadata("design:type", Boolean)
], Reservates.prototype, "occuped", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Parking_ID, { nullable: true }),
    __metadata("design:type", Parking_ID)
], Reservates.prototype, "parking", void 0);
Reservates = __decorate([
    (0, type_graphql_1.InputType)()
], Reservates);
exports.Reservates = Reservates;
//# sourceMappingURL=place.input.js.map