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
exports.Place = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const parking_entity_1 = require("./parking.entity");
let Place = class Place extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Place.prototype, "place_id", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Boolean),
    (0, typeorm_1.Column)({ type: "boolean" }),
    __metadata("design:type", Boolean)
], Place.prototype, "busy", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => parking_entity_1.Parking, (parking) => parking.place),
    __metadata("design:type", Promise)
], Place.prototype, "parking", void 0);
Place = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Place);
exports.Place = Place;
//# sourceMappingURL=place.entity.js.map