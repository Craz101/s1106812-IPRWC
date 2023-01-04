import { WebshopOrderLine } from "./webshopOrderLine.model";

export interface WebshopOrder {
    id: number;

    email: string;
    role: string;
    orderHistory: WebshopOrderLine[];
  }