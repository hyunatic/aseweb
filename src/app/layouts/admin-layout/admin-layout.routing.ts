import { Routes } from '@angular/router';
import { ColorgameComponent } from 'app/colorgame/colorgame.component';
import { LoginComponent } from 'app/login/login.component';
import { NumbergameComponent } from 'app/numbergame/numbergame.component';
import { SimonsaysComponent } from 'app/simonsays/simonsays.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'colorgame', component: ColorgameComponent },
    { path: 'simonsays', component: SimonsaysComponent },
    { path: 'numbergame', component: NumbergameComponent },
];
