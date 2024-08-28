import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BannerComponent } from './banner/banner.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LocationComponent } from './location/location.component';
import { PricingComponent } from './pricing/pricing.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { PriceComponent } from './price/price.component';

const routes: Routes = [
  { path: '', component: BannerComponent },
  { path: 'about', component: AboutComponent },
  { path: 'Pricing', component: PriceComponent },
  { path: 'amenities', component: PricingComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'floor', component: GalleryComponent },
  { path: 'location', component: LocationComponent },
  { path: 'thankyou', component: ThankyouComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
