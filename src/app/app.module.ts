import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterModule } from './components/footer/footer.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { ImgDataService } from './services/img-data.service';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { AdminModule } from './pages/admin/admin.module';
import { SafePipe } from './safe.pipe';
import { OurPortfolioComponent } from './pages/our-portfolio/our-portfolio.component';
import { ApplicationPipesModule } from './safe-pipe.module';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AuthService } from './services/firebaseauth.service';

var config = {
  apiKey: "AIzaSyD13QkcMLA6LTitQWYtQeG8Sfnn3HSuPeY",
  authDomain: "the-vfx-company.firebaseapp.com",
  databaseURL: "https://the-vfx-company-default-rtdb.firebaseio.com",
  projectId: "the-vfx-company",
  storageBucket: "the-vfx-company.appspot.com",
  messagingSenderId: "964343622169",
  appId: "1:964343622169:web:9b344bc0b3761e7c075888"
  }

@NgModule({
  declarations: [
    AppComponent,
    PrivacyPolicyComponent,
    TermsAndConditionsComponent,
    OurPortfolioComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NavbarModule,
    FooterModule,
    AdminModule,
    ApplicationPipesModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  providers: [ImgDataService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
