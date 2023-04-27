export interface oneLunch {
  price: number;
  userId: number;
  fend: boolean;
}
export interface Lunch {
  id: number;
  price: number;
  users: [oneLunch] | [];
  paid: number;
}

export const LunchModel: Array<Lunch> = [];