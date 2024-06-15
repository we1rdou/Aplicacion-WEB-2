export class UpdatePreparacionDto {
    private constructor(
      public readonly idpreparacion: number,
      public readonly fecha?: string,
      public readonly hora?: string,
      public readonly cantidadproductos?: number,
      public readonly costo?: number,
      public readonly tiempoestimado?: number
    ) {}
  
    get values() {
      const returnObj: { [key: string]: any } = {};
  
      if (this.fecha) returnObj.fecha = this.fecha;
      if (this.hora) returnObj.hora = this.hora;
      if (this.cantidadproductos) returnObj.cantidadproductos = this.cantidadproductos;
      if (this.costo) returnObj.costo = this.costo;
      if (this.tiempoestimado) returnObj.tiempoestimado = this.tiempoestimado;
  
      return returnObj;
    }
  
    static create(props: { [key: string]: any }): [string?, UpdatePreparacionDto?] {
      const { idpreparacion, fecha, hora, cantidadproductos, costo, tiempoestimado } = props;
  
      if (!idpreparacion || isNaN(Number(idpreparacion))) {
        return ['idpreparacion must be a valid number'];
      }
  
      return [undefined, new UpdatePreparacionDto(idpreparacion, fecha, hora, cantidadproductos, costo, tiempoestimado)];
    }
  }
  