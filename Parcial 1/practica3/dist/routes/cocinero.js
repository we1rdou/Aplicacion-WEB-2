"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prisma_1 = __importDefault(require("../prisma"));
const router = express_1.default.Router();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const estado = req.query.estado ? String(req.query.estado) : undefined;
    const whereClause = estado ? { estado: estado } : {};
    const cocineros = yield prisma_1.default.cocinero.findMany({
        where: whereClause,
    });
    res.json(cocineros);
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newCocinero = yield prisma_1.default.cocinero.create({
        data: req.body,
    });
    res.status(201).json(newCocinero);
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cocinero = yield prisma_1.default.cocinero.findUnique({
        where: { idcocinero: parseInt(req.params.id) },
    });
    if (cocinero) {
        res.json(cocinero);
    }
    else {
        res.status(404).send('Cocinero no encontrado');
    }
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedCocinero = yield prisma_1.default.cocinero.update({
        where: { idcocinero: parseInt(req.params.id) },
        data: req.body,
    });
    res.json(updatedCocinero);
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedCocinero = yield prisma_1.default.cocinero.update({
            where: { idcocinero: parseInt(req.params.id) },
            data: { estado: 'Eliminado' },
        });
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: 'Error al eliminar el cocinero' });
    }
}));
exports.default = router;
