"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const user_1 = __importDefault(require("./routes/user"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, typeorm_1.createConnection)().then(() => {
    app.use("/api", user_1.default);
    app.listen(3000, () => console.log("Server started on port 3000"));
});
