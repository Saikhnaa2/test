export interface User {
  id: number;
  name: string;
  receivables?: Array<Much>;
  expenditures?: Array<Much>;
}

interface Much {
  user: User;
  price: number;
}

export const UserModel: Array<User> = [];