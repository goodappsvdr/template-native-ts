export interface GetAllRoomsResponse {
  result: boolean;
  message: string;
  offices: Office[] | [];
}

export interface Office {
  idOffice: number;
  description: string;
  content: string;
  descent: string;
  image: string;
  secondImage: any;
  video: string;
}

export interface GetRoomByIdResponse {
  result: boolean;
  message: string;
  offices: Office;
  schedulesOffices: SchedulesOffice[];
}

export interface SchedulesOffice {
  idScheduleOffice: number;
  idOffice: number;
  day: string;
  hour: string;
  idState: number;
}

export type EmployeeList = ConsultingRoomEmployee[] | [];

export interface ConsultingRoomEmployee {
  idEmpleado: number;
  idEmpleadoTipo: number;
  idDisciplina: number;
  idConsultorio: number;
  nombre: string;
  apellido: string;
  descripcion: string;
  imagen: string;
  tipo: any;
  activo: boolean;
}
