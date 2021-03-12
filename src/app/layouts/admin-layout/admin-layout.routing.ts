import { Routes } from '@angular/router';
import { ColorgameComponent } from 'app/colorgame/colorgame.component';
import { NumbergameComponent } from 'app/numbergame/numbergame.component';
import { SimonsaysComponent } from 'app/simonsays/simonsays.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'colorgame', component: ColorgameComponent },
    { path: 'simonsays', component: SimonsaysComponent },
    { path: 'numbergame', component: NumbergameComponent },
];
