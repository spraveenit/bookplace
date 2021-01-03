import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesPage } from './places.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: PlacesPage,
    children: [
      {
        path: 'search',
        loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
      },
      {
        path: 'discover',
        loadChildren: () => import('./discover/discover.module').then( m => m.DiscoverPageModule)
      },
      {
        path: 'offer',
        loadChildren: () => import('./offer/offer.module').then( m => m.OfferPageModule)
      },
      {
        path:'',
        redirectTo: '/places/tabs/discover',
        pathMatch: 'full'
      }
    ]
  },
  {
    path:'',
    redirectTo: '/places/tabs/discover',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {}
