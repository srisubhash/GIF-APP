import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeTitleComponent } from './home-title/home-title.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AuthserviceService} from './authservice.service';

import { RecommendationsComponent } from './recommendations/recommendations.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { SearchComponent } from './search/search.component';


import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AuthGuard } from './auth.guard';
const appRoutes: Routes = [
  { path:'Registration', component: UserRegistrationComponent },
  { path: 'Login', component: UserLoginComponent },
  { path: 'Home', component: HomePageComponent },
  
  { path: 'Favourites', component: FavouritesComponent,canActivate: [AuthGuard]  },
  { path:'Recommendations', component: RecommendationsComponent,canActivate: [AuthGuard]  },
  { path:'Search', component: SearchComponent,canActivate: [AuthGuard] },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: '**', redirectTo: '/Registration', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    HomePageComponent,
     HomeFooterComponent,
    HomeHeaderComponent,
    HomeTitleComponent,
    
    RecommendationsComponent,
    FavouritesComponent,
    SearchComponent,
   
  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
  
  ],
  providers: [AuthserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
