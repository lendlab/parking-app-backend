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
exports.ReservationInput = void 0;
const type_graphql_1 = require("type-graphql");
let Place_Id = class Place_Id {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Place_Id.prototype, "place_id", void 0);
Place_Id = __decorate([
    (0, type_graphql_1.InputType)()
], Place_Id);
let User_Email = class User_Email {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], User_Email.prototype, "email", void 0);
User_Email = __decorate([
    (0, type_graphql_1.InputType)()
], User_Email);
let ReservationInput = class ReservationInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], ReservationInput.prototype, "reservation_token", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], ReservationInput.prototype, "reservation_starts", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Date)
], ReservationInput.prototype, "reservation_end", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => User_Email),
    __metadata("design:type", User_Email)
], ReservationInput.prototype, "user", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Place_Id),
    __metadata("design:type", Place_Id)
], ReservationInput.prototype, "place", void 0);
ReservationInput = __decorate([
    (0, type_graphql_1.InputType)()
], ReservationInput);
exports.ReservationInput = ReservationInput;
//# sourceMappingURL=reservate.input.js.map