export class PreparacionEntity {

    constructor(
      public idpreparacion: number,
      public fecha?: string,
      public hora?: string,
      public cantidadproductos?: number,
      public costo?: number,
      public tiempoestimado?: number,

    ) {}
  
    public static fromObject( object: {[key: string]: any} ): PreparacionEntity {
      const { idpreparacion, fecha,hora,cantidadproductos,costo,tiempoestimado } = object;
      if ( !idpreparacion ) throw 'idpreparacion is required';
      if ( !fecha ) throw 'fecha is required';
      if ( !hora ) throw 'hora is required';
      if ( !cantidadproductos ) throw 'cantidadproductos is required';
      if ( !costo) throw 'costo is required';
      if ( !tiempoestimado) throw 'tiempoestimado is required';
  
      return new PreparacionEntity(idpreparacion, fecha,hora,cantidadproductos,costo,tiempoestimado)

    }
  
  }
  
  
  