"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreparacionService = void 0;
const common_1 = require("@nestjs/common");
const preparacion = [
    {
        idpreparacion: 1,
        idcocinero: 1,
        idreceta: 1,
        nombre: 'nombre1',
        descripcion: 'descripcion1',
        tiempo: 1,
        dificultad: 'dificultad1',
        categoria: 'categoria1'
    },
    {
        idpreparacion: 2,
        idcocinero: 2,
        idreceta: 2,
        nombre: 'nombre2',
        descripcion: 'descripcion2',
        tiempo: 2,
        dificultad: 'dificultad2',
        categoria: 'categoria2'
    },
];
const users = [
    { id: '1', nombre: 'user1', isActive: true },
    { id: '2', nombre: 'user2', isActive: false },
    { id: '3', nombre: 'user3', isActive: true },
];
let PreparacionService = class PreparacionService {
    constructor() {
        this.connectedClients = {};
    }
    registerClient(socket, userId) {
        const user = users.find(user => user.id === userId);
        if (!user) {
            throw new Error('Usuario no encontrado');
        }
        if (!user.isActive) {
            throw new Error('El usuario no está activo');
        }
        const userConnections = Object.values(this.connectedClients).filter(client => client.user.id === user.id);
        if (userConnections.length >= 3) {
            throw new Error('Usuario ya tiene 3 conexiones activas');
        }
        this.connectedClients[socket.id] = {
            socket: socket,
            user: user
        };
    }
    removeClient(clienteId) {
        delete this.connectedClients[clienteId];
    }
    getConnectedClients() {
        return Object.keys(this.connectedClients);
    }
    getUserFullName(socketId) {
        return this.connectedClients[socketId].user.nombre;
    }
    checkUserConnection(user) {
        for (const clientId of Object.keys(this.connectedClients)) {
            const connectedClient = this.connectedClients[clientId];
            if (connectedClient.user.id === user.id) {
                connectedClient.socket.disconnect();
                break;
            }
        }
    }
    create(createPreparacionDto) {
        preparacion.push(createPreparacionDto);
        return createPreparacionDto;
    }
    findAll() {
        return preparacion;
    }
};
exports.PreparacionService = PreparacionService;
exports.PreparacionService = PreparacionService = __decorate([
    (0, common_1.Injectable)()
], PreparacionService);
//# sourceMappingURL=preparacion.service.js.map