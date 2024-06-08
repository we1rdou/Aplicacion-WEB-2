"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cocinero_1 = __importDefault(require("./routes/cocinero"));
const receta_1 = __importDefault(require("./routes/receta"));
const preparacion_1 = __importDefault(require("./routes/preparacion"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
// Ruta básica para la URL raíz
app.get('/', (req, res) => {
    res.send('Bienvenido al servicio REST de cocina');
});
app.use('/cocineros', cocinero_1.default);
app.use('/recetas', receta_1.default);
app.use('/preparaciones', preparacion_1.default);
app.listen(port, () => {
    console.log(`Servicio REST escuchando en http://localhost:${port}`);
});
