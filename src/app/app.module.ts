import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HeaderComponent } from './component/header/header.component';
import { FeaturesComponent } from './component/features/features.component';
import { PixelSectionComponent } from './component/pixel-section/pixel-section.component';
import { PagesSectionComponent } from './component/pages-section/pages-section.component';
import { ConnectComponent } from './component/connect/connect.component';
import { FooterComponent } from './component/footer/footer.component';
import { SinglePostComponent } from './component/single-post/single-post.component';
import { PixelComponent } from './component/pixel/pixel.component';
import { PagesComponent } from './component/pages/pages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    HeaderComponent,
    FeaturesComponent,
    PixelSectionComponent,
    PagesSectionComponent,
    ConnectComponent,
    FooterComponent,
    SinglePostComponent,
    PixelComponent,
    PagesComponent,

   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
