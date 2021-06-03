"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const auth_1 = __importDefault(require("./routes/auth"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
const PORT = process.env.PORT || 4000;
//middles
app.use(express_1.default.json()); //Transforma lo que llegue a un objeto json
app.use(express_1.default.urlencoded({ extended: false })); //Transforma un form a json
app.use(index_1.default);
app.use(auth_1.default);
app.use(cors_1.default());
app.listen(PORT, () => {
    console.log(`Server en puerto ${PORT}`);
});
