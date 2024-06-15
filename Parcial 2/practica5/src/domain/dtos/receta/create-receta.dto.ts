export class CreateRecetaDto {
    private constructor(
      public readonly nombreplato: string,
      public readonly categoria: string,
      public readonly ingredientes: string[],
      public readonly calorias: number
    ) {}
  
    static create(props: { [key: string]: any }): [string?, CreateRecetaDto?] {
      const { nombreplato, categoria, ingredientes, calorias } = props;
  
      if ( !nombreplato ) return ['nombreplato property is required', undefined];
      if ( !categoria ) return ['categoria property is required', undefined];
      if ( !ingredientes ) return ['ingredientes property is required', undefined];
      if ( !calorias ) return ['calorias property is required', undefined];
  
      return [undefined, new CreateRecetaDto(nombreplato, categoria, ingredientes, calorias)];
    }
  }