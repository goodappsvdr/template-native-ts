export type NewsList = News[] | [];

export interface News {
  idNoticia: number;
  idDisciplina: number;
  idCategoria: number;
  fecha: string;
  descripcion: string;
  titulo: string;
  subTitulo: string;
  contenido: string;
  destacado: string;
  imagen: string;
  usuario: string;
  url: string;
  activo: boolean;
  idEstado: any;
  imagenPrincipal: string;
  imagenPrincipalCelular: any;
  video: any;
  imagenVideo: any;
}
