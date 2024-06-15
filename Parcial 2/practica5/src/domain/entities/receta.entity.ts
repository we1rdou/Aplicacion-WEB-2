export class RecetaEntity {

    constructor(
      public idreceta: number,
      public nombreplato: string,
      public categoria: string,
      public ingredientes: string[],
      public calorias: number,

    ) {}
  
    public static fromObject( object: {[key: string]: any} ): RecetaEntity {
      const { idreceta, nombreplato,categoria,ingredientes,calorias } = object;
      if ( !idreceta ) throw 'idreceta is required';
      if ( !nombreplato ) throw 'nombreplato is required';
      if ( !categoria ) throw 'categoria is required';
      if ( !ingredientes ) throw 'ingredientes is required';
      if ( !calorias ) throw 'calorias is required';
  
      return new RecetaEntity(idreceta, nombreplato,categoria,ingredientes,calorias)

    }
  
  }
  
  
  