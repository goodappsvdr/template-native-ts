export interface GetAllDisciplinesResponse {
  result: boolean;
  message: string;
  disciplines: Disciplines[] | [];
}

export interface DisciplineByIdResponse {
  result: boolean;
  message: string;
  disciplines: Disciplines;
  schedulesDisciplines: SchedulesDiscipline[] | [];
  investmentsDisciplines: InvestmentsDiscipline[] | [];
  equipmentsDisciplines: EquipmentsDiscipline[] | [];
}

export interface Disciplines {
  idDiscipline: number;
  description: string;
  content: string;
  descent: string;
  image: string;
  secondImage: string;
  video: string;
}

export interface SchedulesDiscipline {
  idScheduleLevel: number;
  level: string;
  schedules: Schedule[];
}

export interface Schedule {
  idSchedule: number;
  equipment: string;
  age: string;
  day: string;
  hour: string;
}

export interface InvestmentsDiscipline {
  idAge: number;
  age: string;
  investments: Investment[];
}

export interface Investment {
  idInvestment: number;
  description: string;
  minute: string;
  price: string;
}

export interface EquipmentsDiscipline {
  idEquipment: number;
  equipment: string;
  image: string;
}
