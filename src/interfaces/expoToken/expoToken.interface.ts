export interface getAsyncResponse {
  result: boolean;
  message: string;
  tokenExpo: TokenExpo;
}

export interface TokenExpo {
  idTokenExpoPush: number;
  idCliente: number | null;
  token: string | null;
  active: boolean | null;
}
