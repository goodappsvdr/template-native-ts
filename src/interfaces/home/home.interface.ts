export type GetBannersResponse = Banner[];

export interface Banner {
  id: number;
  imagen: string;
  urlImagen: string;
  idEstado: number;
  imagenCelular: string;
}
