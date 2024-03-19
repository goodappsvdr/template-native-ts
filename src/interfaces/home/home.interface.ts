export type GetBannersResponse = Banner[];

export interface Banner {
  id: number;
  imagen: string;
  urlImagen: string;
  idEstado: number;
  imagenCelular: string;
}

export type GetNewDisciplinesResponse = NewDiscipline[];

export interface NewDiscipline {
  idImagenDisciplina: number;
  idDisciplina: number;
  disciplina: string;
  imagen: string;
  active: any;
}
