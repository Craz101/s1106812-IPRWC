import { WebshopOrder } from "./webshopOrder.model";

export interface WebshopUser {
    id: number;
    username: string;
    email: string;
    role: string;
    // orderHistory: WebshopOrder[];
  }