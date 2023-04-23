export interface Tour {
	_id?: string;
	duration: string;
	title: string;
	desc: string[];
	places: string[];
	price: string;
	busySeats?: string;
	allSeats: string;
	team: string[];
	mainImg: string;
	sliderImgs: string[];
}