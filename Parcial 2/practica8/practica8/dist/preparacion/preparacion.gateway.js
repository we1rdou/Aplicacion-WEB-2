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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreparacionGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const create_preparacion_dto_1 = require("./dto/create-preparacion.dto");
const preparacion_service_1 = require("./preparacion.service");
let PreparacionGateway = class PreparacionGateway {
    constructor(preparacionService) {
        this.preparacionService = preparacionService;
    }
    async handleConnection(client, ...args) {
        const token = client.handshake.headers.authentication;
        try {
            await this.preparacionService.registerClient(client, token);
        }
        catch (error) {
            client.disconnect();
            return;
        }
        this.wss.emit('clients-updated', this.preparacionService.getConnectedClients());
    }
    handleDisconnect(client) {
        this.preparacionService.removeClient(client.id);
        this.wss.emit('clients-updated', this.preparacionService.getConnectedClients());
    }
    onMessageFromClient(client) {
        this.wss.emit('message-from-server', {
            fullName: this.preparacionService.getUserFullName(client.id),
        });
    }
    create(CreatePreparacionDto) {
        const inserted = this.preparacionService.create(CreatePreparacionDto);
        this.wss.emit('newPreparacion', this.findAll());
        return inserted;
    }
    findAll() {
        return this.preparacionService.findAll();
    }
};
exports.PreparacionGateway = PreparacionGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], PreparacionGateway.prototype, "wss", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('message-from-client'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], PreparacionGateway.prototype, "onMessageFromClient", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('agregar-transaccion'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_preparacion_dto_1.CreatePreparacionDto]),
    __metadata("design:returntype", void 0)
], PreparacionGateway.prototype, "create", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('consultar-activos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PreparacionGateway.prototype, "findAll", null);
exports.PreparacionGateway = PreparacionGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: true }),
    __metadata("design:paramtypes", [preparacion_service_1.PreparacionService])
], PreparacionGateway);
//# sourceMappingURL=preparacion.gateway.js.map