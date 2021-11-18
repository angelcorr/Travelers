import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './my-components/body/body.component';
import { HeaderComponent } from './my-components/header/header.component';
import { SignUpComponent } from './my-components/sign-up/sign-up.component';
import { TuristicPlaceProfileComponent } from './my-components/turistic-place-profile/turistic-place-profile';
import { UserProfileComponent } from './my-components/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    SignUpComponent,
    UserProfileComponent,
    TuristicPlaceProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
