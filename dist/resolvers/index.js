"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shcemaIndex = void 0;
const type_graphql_1 = require("type-graphql");
const user_mutation_1 = require("./mutations/user.mutation");
const hello_1 = require("./querys/hello");
const resolvers = [hello_1.HelloResolver, user_mutation_1.UserMutation];
exports.shcemaIndex = (0, type_graphql_1.buildSchema)({
    resolvers: resolvers,
});
//# sourceMappingURL=index.js.map