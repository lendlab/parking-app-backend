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
exports.ReservationSubscription = void 0;
const type_graphql_1 = require("type-graphql");
const reservate_entity_1 = require("../../entity/reservate.entity");
let ReservationSubscription = class ReservationSubscription {
    newReservationSubscription(payload) {
        return payload;
    }
    returnReservationSubscription(payload) {
        return payload;
    }
    confirmReservationSubscription(payload) {
        return payload;
    }
};
__decorate([
    (0, type_graphql_1.Subscription)({ topics: "CREATE_RESERVATION" }),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reservate_entity_1.Reservate]),
    __metadata("design:returntype", reservate_entity_1.Reservate)
], ReservationSubscription.prototype, "newReservationSubscription", null);
__decorate([
    (0, type_graphql_1.Subscription)({ topics: "RETURN_RESERVATION" }),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reservate_entity_1.Reservate]),
    __metadata("design:returntype", reservate_entity_1.Reservate)
], ReservationSubscription.prototype, "returnReservationSubscription", null);
__decorate([
    (0, type_graphql_1.Subscription)({ topics: "CONFIRM_RESERVATION" }),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reservate_entity_1.Reservate]),
    __metadata("design:returntype", reservate_entity_1.Reservate)
], ReservationSubscription.prototype, "confirmReservationSubscription", null);
ReservationSubscription = __decorate([
    (0, type_graphql_1.Resolver)()
], ReservationSubscription);
exports.ReservationSubscription = ReservationSubscription;
//# sourceMappingURL=reservation.subscription.js.map