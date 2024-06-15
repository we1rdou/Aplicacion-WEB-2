export class CreatePreparacionDto {
    private constructor(
      public readonly fecha: string,
      public readonly hora: string,
      public readonly cantidadproductos: number,
      public readonly costo: number,
      public readonly tiempoestimado: number,
      public readonly cocinero_idcocinero: number,
      public readonly receta_idreceta: number
    ) {}
  
    static create(props: { [key: string]: any }): [string?, CreatePreparacionDto?] {
      const { fecha, hora, cantidadproductos, costo, tiempoestimado,cocinero_idcocinero,receta_idreceta } = props;
  
      if (!fecha) return ['fecha property is required', undefined];
      if (!hora) return ['hora property is required', undefined];
      if (!cantidadproductos) return ['cantidadproductos property is required and must be a number', undefined];
      if (!costo) return ['costo property is required and must be a number', undefined];
      if (!tiempoestimado ) return ['tiempoestimado property is required and must be a number', undefined];
      if (!cocinero_idcocinero) return ['fecha property is required', undefined];
      if (!receta_idreceta) return ['fecha property is required', undefined];
  
      return [undefined, new CreatePreparacionDto(fecha, hora, cantidadproductos, costo, tiempoestimado,cocinero_idcocinero,receta_idreceta)];
    }
  }
  