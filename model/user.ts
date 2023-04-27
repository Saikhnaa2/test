export interface User {
  id: number;
  name: string;
  receivables: Array<Much> | [];
  expenditures: Array<Much> | [];
}

interface Much {
  user: Array<User> | [];
  price: number;
}

export const UserModel: Array<User> = [];