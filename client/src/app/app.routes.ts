import { Routes } from '@angular/router';
import { AuthLayout } from './shared/layouts/auth-layout/auth-layout';
import { MainLayout } from './shared/layouts/main-layout/main-layout';

export const routes: Routes = [
    {
        path: 'auth',
        component: AuthLayout,
        children: [
            {
                path: 'login',
                loadComponent: () => import('./login/login').then(m => m.Login)
            },
            {
                path: 'register',
                loadComponent: () => import('./register/register').then(m => m.Register)
            },
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: '**',
                redirectTo: 'login'
            }
        ]
    },
    {
        path: '',
        component: MainLayout,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                loadComponent: () => import('./dashboard/dashboard').then(m => m.Dashboard)
            },
            {
                path: 'cards',
                children: [
                    {
                        path: '',
                        loadComponent: () => import('./cards/cards-list/cards-list').then(m => m.CardsList)
                    },
                    {
                        path: 'new',
                        loadComponent: () => import('./cards/card-form/card-form').then(m => m.CardForm)
                    }
                ]
            }
        ]
    }
];
