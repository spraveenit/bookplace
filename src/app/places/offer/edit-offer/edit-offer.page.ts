import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {

  place:Place;

  constructor(private route:ActivatedRoute, private placeService:PlacesService, private navCtrl:NavController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(p=>{
      if(!p.has('placeId')){
        this.navCtrl.navigateBack('/places/tabs/offer');
        return;
      }
      this.place = this.placeService.getPlace(p.get('placeId'));
    })
  }
}
