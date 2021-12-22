import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimateContactoComponent } from './animate-contacto/animate-contacto.component';
import { MobileformsComponent, SafeHtmlPipe } from './mobileforms/mobileforms.component';
import { PreciosComponent } from './mobileforms/precios/precios.component';
import { SubmenuComponent } from './mobileforms/submenu/submenu.component';
import { SidebarComponent } from './mobileforms/sidebar/sidebar.component';
import { SidebarContactComponent } from './sidebar-contact/sidebar-contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SomosComponent } from './somos/somos.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimateContactoComponent,
    MobileformsComponent,
    SafeHtmlPipe,
    PreciosComponent,
    SubmenuComponent,
    SidebarComponent,
    SidebarContactComponent,
    HeaderComponent,
    FooterComponent,
    SomosComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    CarouselModule,
    NgxSkeletonLoaderModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
