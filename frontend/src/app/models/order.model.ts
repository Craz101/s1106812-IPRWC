import { OrderLine } from "./orderLine.model";
import { User } from "./user.model";

export interface Order {
    user: User;
    orderContents: OrderLine[];
  }
