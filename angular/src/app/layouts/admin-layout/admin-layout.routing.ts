import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',   canActivate:[AuthGuardService],   component: DashboardComponent },
    { path: 'user-profile',canActivate:[AuthGuardService],   component: UserProfileComponent },
];
