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
exports.ReservateResponse = void 0;
const type_graphql_1 = require("type-graphql");
const place_entity_1 = require("../entity/place.entity");
let ReservateErrors = class ReservateErrors {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], ReservateErrors.prototype, "path", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], ReservateErrors.prototype, "message", void 0);
ReservateErrors = __decorate([
    (0, type_graphql_1.ObjectType)()
], ReservateErrors);
let ReservateResponse = class ReservateResponse {
};
__decorate([
    (0, type_graphql_1.Field)(() => [ReservateErrors], { nullable: true }),
    __metadata("design:type", Array)
], ReservateResponse.prototype, "errors", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => place_entity_1.Place, { nullable: true }),
    __metadata("design:type", place_entity_1.Place)
], ReservateResponse.prototype, "place", void 0);
ReservateResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], ReservateResponse);
exports.ReservateResponse = ReservateResponse;
//# sourceMappingURL=reservate.response.js.map