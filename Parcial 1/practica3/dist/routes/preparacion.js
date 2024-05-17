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
    const preparaciones = yield prisma_1.default.preparacion.findMany({
        where: whereClause,
    });
    res.json(preparaciones);
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newPreparacion = yield prisma_1.default.preparacion.create({
        data: req.body,
    });
    res.status(201).json(newPreparacion);
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const preparacion = yield prisma_1.default.preparacion.findUnique({
        where: { idpreparacion: parseInt(req.params.id) },
    });
    if (preparacion && preparacion.estado !== 'Eliminado') {
        res.json(preparacion);
    }
    else {
        res.status(404).send('Preparacion no encontrada');
    }
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedPreparacion = yield prisma_1.default.preparacion.update({
        where: { idpreparacion: parseInt(req.params.id) },
        data: req.body,
    });
    res.json(updatedPreparacion);
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedPreparacion = yield prisma_1.default.preparacion.update({
            where: { idpreparacion: parseInt(req.params.id) },
            data: { estado: 'Eliminado' },
        });
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: 'Error al eliminar la preparacion' });
    }
}));
exports.default = router;
