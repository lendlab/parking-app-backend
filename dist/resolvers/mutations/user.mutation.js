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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMutation = void 0;
const type_graphql_1 = require("type-graphql");
const argon2_1 = __importDefault(require("argon2"));
const user_response_1 = require("../../errors/user.response");
const user_entity_1 = require("../../entity/user.entity");
const user_input_1 = require("../../inputs/user.input");
const typeorm_1 = require("typeorm");
let UserMutation = class UserMutation {
    async login(options, { req }) {
        const user = await (0, typeorm_1.getRepository)(user_entity_1.User)
            .createQueryBuilder("user")
            .where(`user.email = '${options.email}'`)
            .getOne();
        if (!user) {
            return {
                errors: [
                    {
                        path: "email",
                        message: "Esta email no existe, intentalo de nuevo.",
                    },
                ],
            };
        }
        const valid = await argon2_1.default.verify(user.password, options.password);
        if (!valid) {
            return {
                errors: [
                    {
                        path: "password",
                        message: "Contrasñea incorrecta, intentalo de nuevo.",
                    },
                ],
            };
        }
        req.session.email = user.email;
        return { user };
    }
    logout({ req, res }) {
        return new Promise((resolve) => req.session.destroy((err) => {
            res.clearCookie("qid");
            if (err) {
                console.log(err);
                resolve(false);
                return;
            }
            resolve(true);
        }));
    }
    async createUser(options) {
        const hashedPass = await argon2_1.default.hash(options.password);
        const user = await user_entity_1.User.create({
            name: options.name,
            email: options.email,
            password: hashedPass,
        }).save();
        return { user };
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => user_response_1.UserResponse, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("options", () => user_input_1.LoginInput)),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_input_1.LoginInput, Object]),
    __metadata("design:returntype", Promise)
], UserMutation.prototype, "login", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserMutation.prototype, "logout", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => user_response_1.UserResponse, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("options", () => user_input_1.UserInput)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_input_1.UserInput]),
    __metadata("design:returntype", Promise)
], UserMutation.prototype, "createUser", null);
UserMutation = __decorate([
    (0, type_graphql_1.Resolver)()
], UserMutation);
exports.UserMutation = UserMutation;
//# sourceMappingURL=user.mutation.js.map