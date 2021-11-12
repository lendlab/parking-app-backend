"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shcemaIndex = void 0;
const type_graphql_1 = require("type-graphql");
const user_mutation_1 = require("./mutations/user.mutation");
const hello_1 = require("./querys/hello");
const user_query_1 = require("./querys/user.query");
const resolvers = [hello_1.HelloResolver, user_mutation_1.UserMutation, user_query_1.UserQuery];
exports.shcemaIndex = (0, type_graphql_1.buildSchema)({
    resolvers: resolvers,
    validate: true,
});
//# sourceMappingURL=index.js.map