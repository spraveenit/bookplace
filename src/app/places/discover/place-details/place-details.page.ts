import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.page.html',
  styleUrls: ['./place-details.page.scss'],
})
export class PlaceDetailsPage implements OnInit {

  place:Place;

  ngOnInit() {
    this.route.paramMap.subscribe(p=>{
      if(!p.has('placeId')){
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placesService.getPlace(p.get('placeId'));
    })
  }

  constructor(private route:ActivatedRoute, private placesService:PlacesService, private navCtrl: NavController, private modalCntrl:ModalController){}

  onBookPlace(): void {    
   // this.navCtrl.navigateBack('places/tabs/discover');
   this.modalCntrl.create({component: CreateBookingComponent, componentProps: {selectedPlace: this.place}})
   .then(modalEl => {
     modalEl.present();
     return modalEl.onDidDismiss();
   }).then(resultData => {
     console.log(resultData.data, resultData.role);
     if(resultData.role === 'confirmed'){
       console.log('Booked!');
     }
   })
  }

}
