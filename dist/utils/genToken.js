"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genToken = void 0;
const genToken = (lenght) => {
    let result = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charLenght = characters.length;
    for (let i = 0; i < lenght; i++) {
        result += characters.charAt(Math.floor(Math.random() * charLenght));
    }
    return result;
};
exports.genToken = genToken;
//# sourceMappingURL=genToken.js.map