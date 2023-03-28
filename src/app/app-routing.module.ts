import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectComponent } from './component/connect/connect.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HeaderComponent } from './component/header/header.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PagesComponent } from './component/pages/pages.component';
import { PixelComponent } from './component/pixel/pixel.component';
import { SinglePostComponent } from './component/single-post/single-post.component';

const routes: Routes = [
  {
    path:'',redirectTo:'home', pathMatch:'full'
  },
  {path:'home',component:HeaderComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'singlePost/:id',component:SinglePostComponent},
  {path:'pixels',component:PixelComponent},
  {path:'pages',component:PagesComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
