export interface ClientesGetAsyncResponse {
  result: boolean;
  message: string;
  clients: Clients;
  contracts: Contract[];
}

export interface Clients {
  idClient: number;
  name: string;
  birthDate: string;
  mobile: string;
  dni: string;
  email: string;
  image: string;
  state: any;
}

export interface Contract {
  idClientContract: number;
  plan: string;
  startDate: string;
  endDate: string;
  state: string;
}

export interface ClaimResponse {
  result: boolean;
  message: string;
  claims: Claim[] | [];
}

export interface Claim {
  id: number;
  idClient: number;
  date: string;
  description: string;
  image: any;
  idState: number;
  state: string;
}
