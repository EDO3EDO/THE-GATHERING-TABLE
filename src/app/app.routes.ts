import { Routes } from '@angular/router';
import { HomeComponent } from '../component/Home/Home.component';
import { AboutComponent } from '../component/About/About.component';
import { SignInComponent } from '../component/Sign-In/Sign-In.component';
import { Sign_UpComponent } from '../component/Sign_Up/Sign_Up.component';

export const routes: Routes = [

{path:"" , redirectTo:"Home" , pathMatch:"full" },
{path:"Home" ,  component:HomeComponent },
{path:"About" , component:AboutComponent},
{path:"Sign_In" , component:SignInComponent},
{path:"Sign_Up" , component:Sign_UpComponent},



];
