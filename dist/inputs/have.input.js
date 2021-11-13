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
exports.HaveInput = void 0;
const type_graphql_1 = require("type-graphql");
let Parking_id = class Parking_id {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Parking_id.prototype, "parking_id", void 0);
Parking_id = __decorate([
    (0, type_graphql_1.InputType)()
], Parking_id);
let Place_id = class Place_id {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Place_id.prototype, "place_id", void 0);
Place_id = __decorate([
    (0, type_graphql_1.InputType)()
], Place_id);
let HaveInput = class HaveInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => Parking_id),
    __metadata("design:type", Parking_id)
], HaveInput.prototype, "parking", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Place_id),
    __metadata("design:type", Place_id)
], HaveInput.prototype, "place", void 0);
HaveInput = __decorate([
    (0, type_graphql_1.InputType)()
], HaveInput);
exports.HaveInput = HaveInput;
//# sourceMappingURL=have.input.js.map