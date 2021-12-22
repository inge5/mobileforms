import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileformsComponent } from './mobileforms/mobileforms.component';
import { PreciosComponent } from './mobileforms/precios/precios.component';
import { SomosComponent } from './somos/somos.component';

const routes: Routes = [
    { path: '', component: MobileformsComponent},
    { path: 'precios', component: PreciosComponent},
    { path: 'somos', component: SomosComponent},
    {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    // scrollOffset: [0, 64],
    useHash: true, initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
