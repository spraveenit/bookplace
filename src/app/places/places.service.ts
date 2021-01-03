import { Injectable } from "@angular/core";
import { Place } from "./place.model";

@Injectable({
  providedIn: "root",
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      "p1",
      "Hotel in NYC",
      "Plaza Hotel",
      "https://www.theplazany.com/wp-content/uploads/2019/03/The-Plaza-A-Fairmont-Managed-Hotel-Exterior-1223573.jpg",
      120
    ),
    new Place(
      "p2",
      "Hotel in boston",
      "Boston Hotel",
      "https://cf.bstatic.com/images/hotel/max1024x768/672/67270268.jpg",
      150
    ),
    new Place(
      "p3",
      "Hotel in Paris",
      "Elysees Union Hotel",
      "https://elysees-paris-hotel.com/_novaimg/4394833-1366277_200_0_1917_1533_1000_800.jpg",
      160
    ),
  ];

  get places() {
    return [...this._places];
  }

  getPlace(id:string){
    return {...this._places.find(p=>{return p.id === id})};
  }

  constructor() {}
}
