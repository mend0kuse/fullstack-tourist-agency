import { Tour } from "./Tour";
import { User } from "./User";

export interface Order {
	virtualTour?: Tour[];
	virtualUser?: User[];
	countPeopeles?: number;
	price?: string;
}