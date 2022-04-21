import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  { 
    path: 'home', 
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) 
  },
  {
    path:'cards',
    component: CardsComponent
  },
  { 
    path: 'contactus', 
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
  },
  { 
    path: 'offerings', 
    loadChildren: () => import('./pages/offerings/offerings.module').then(m => m.OfferingsModule) 
  },
  { 
    path: 'our-work/:client',
    loadChildren: () => import('./pages/our-work/our-work.module').then(m => m.OurWorkModule) 
  },
  { 
    path: 'aboutus',
    loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule) 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
