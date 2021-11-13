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
exports.Reservate = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const place_entity_1 = require("./place.entity");
const user_entity_1 = require("./user.entity");
let Reservate = class Reservate extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Reservate.prototype, "reservation_id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Reservate.prototype, "reservation_token", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Date),
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], Reservate.prototype, "reservation_starts", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Date, { nullable: true }),
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp", nullable: true }),
    __metadata("design:type", Date)
], Reservate.prototype, "reservation_end", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => user_entity_1.User),
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.reservates, { onDelete: "CASCADE" }),
    __metadata("design:type", user_entity_1.User)
], Reservate.prototype, "user", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => place_entity_1.Place),
    (0, typeorm_1.ManyToOne)(() => place_entity_1.Place, (place) => place.reservate, {
        primary: true,
        onDelete: "CASCADE",
    }),
    __metadata("design:type", place_entity_1.Place)
], Reservate.prototype, "place", void 0);
Reservate = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Reservate);
exports.Reservate = Reservate;
//# sourceMappingURL=reservate.entity.js.map