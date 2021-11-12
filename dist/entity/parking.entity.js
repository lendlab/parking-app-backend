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
exports.Parking = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const place_entity_1 = require("./place.entity");
const reservate_entity_1 = require("./reservate.entity");
let Parking = class Parking extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Parking.prototype, "parking_id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Parking.prototype, "parking_name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Parking.prototype, "longitude", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Parking.prototype, "latitude", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => place_entity_1.Place),
    (0, typeorm_1.ManyToOne)(() => place_entity_1.Place, (place) => place.parking),
    __metadata("design:type", place_entity_1.Place)
], Parking.prototype, "place", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => reservate_entity_1.Reservate, (reservate) => reservate.parking),
    __metadata("design:type", Promise)
], Parking.prototype, "reservates", void 0);
Parking = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Parking);
exports.Parking = Parking;
//# sourceMappingURL=parking.entity.js.map