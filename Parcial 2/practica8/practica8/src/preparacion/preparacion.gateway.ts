import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { CreatePreparacionDto } from './dto/create-preparacion.dto';
import { PreparacionService } from './preparacion.service';

@WebSocketGateway({cors: true})
export class PreparacionGateway implements OnGatewayConnection, OnGatewayDisconnect{

  @WebSocketServer()
  wss: Server;

  constructor(private readonly preparacionService: PreparacionService) {}

  async handleConnection(client: Socket, ...args: any[]) {
    const token = client.handshake.headers.authentication as string;
    try {
      // validar el token
      await this.preparacionService.registerClient(client, token);
    } catch (error) {
      client.disconnect();  
      return;    
    }
    this.wss.emit('clients-updated', this.preparacionService.getConnectedClients());
  }
  handleDisconnect(client: Socket) {
    this.preparacionService.removeClient(client.id);
    this.wss.emit('clients-updated', this.preparacionService.getConnectedClients());
  }

  @SubscribeMessage('message-from-client')
  onMessageFromClient(client: Socket) {
    //! todos reciben el mensaje
    this.wss.emit('message-from-server',{
      fullName: this.preparacionService.getUserFullName(client.id),
    });
  }


  @SubscribeMessage('agregar-transaccion')
  create(@MessageBody() CreatePreparacionDto: CreatePreparacionDto) {
    
    const inserted = this.preparacionService.create(CreatePreparacionDto);
    this.wss.emit('newPreparacion', this.findAll() );
    return inserted;
  }

  @SubscribeMessage('consultar-activos')
  findAll() {
    return this.preparacionService.findAll();
  }
}
