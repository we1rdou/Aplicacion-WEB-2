import { Injectable } from '@nestjs/common';
import { CreatePreparacionDto } from './dto/create-preparacion.dto';
import { Socket } from 'socket.io';

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

interface User{
  id: string;
  nombre: string;
  isActive: boolean
}


interface ConnectedClients{
  [id: string]: {
    socket: Socket;
    user: User;
  }
}

const users: User[] = [
  {id: '1', nombre: 'user1', isActive: true},
  {id: '2', nombre: 'user2', isActive: false},
  {id: '3', nombre: 'user3', isActive: true},
 ];

@Injectable()
export class PreparacionService {

  private connectedClients: ConnectedClients = {};

  registerClient(socket: Socket, userId: string){
    const user = users.find(user => user.id === userId);
      if(!user){
        throw new Error('Usuario no encontrado')
      }
      if (!user.isActive){
        throw new Error('El usuario no está activo');
      }
      const userConnections = Object.values(this.connectedClients).filter(
        client => client.user.id === user.id
    );

    if (userConnections.length >= 3) {
        throw new Error('Usuario ya tiene 3 conexiones activas');
    }

      this.connectedClients[socket.id] = {
        socket: socket,
        user: user
      };
  }

  

  removeClient(clienteId: string){
    delete this.connectedClients[clienteId];
  }

  getConnectedClients():string[]{
    return Object.keys(this.connectedClients);
  }

  getUserFullName(socketId: string): string{
    return this.connectedClients[socketId].user.nombre;
  }

  checkUserConnection(user: User){
    for (const clientId of  Object.keys(this.connectedClients)) {
      const connectedClient = this.connectedClients[clientId];
      if (connectedClient.user.id === user.id) {
          // throw new Error('User is already connected');
          connectedClient.socket.disconnect();
          break;
      }
    }
  }

  create(createPreparacionDto: CreatePreparacionDto) {
    preparacion.push(createPreparacionDto);
    return createPreparacionDto; 
  }

  findAll() {
    return preparacion;
  }
}