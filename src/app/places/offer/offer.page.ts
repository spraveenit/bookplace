import { Component, OnInit } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.page.html',
  styleUrls: ['./offer.page.scss'],
})
export class OfferPage implements OnInit, ViewWillEnter {

  loadedOffers:Place[];

  constructor(private placesService:PlacesService) { }

  ionViewWillEnter(): void {
    this.loadedOffers = this.placesService.places
  }

  ngOnInit() {
  }



}
