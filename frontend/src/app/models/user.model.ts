import { Order } from "./order.model";

export interface User {
  id: number;
  username: string;
  email: string;
  role: string;
  key: string;
}