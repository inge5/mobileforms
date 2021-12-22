import { Component, OnInit, ViewChild } from '@angular/core';

import {MatSidenav} from '@angular/material/sidenav';
import { DomSanitizer } from '@angular/platform-browser';
import { HomeService } from 'src/app/services/home.service';

declare var $ : any; 

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.css']
})
export class PreciosComponent implements OnInit {

  prices:any = [];
  data:any = [];
  public userside: any;
  loader = true;

  constructor(private _sanitizer: DomSanitizer, private _homeservice:HomeService) { 
    this.userside = {
      empresa: '',
      nombres: '',
      telefono: '',
      email: '',
      producto: '',
      acepto: ''
    };
  }

  ngOnInit(): void {
    this._homeservice.getHomeMobileForms()
    .subscribe((res:any) => {
      this.loader = false;
      this.data = this._sanitizer.bypassSecurityTrustHtml(res);
      this.data = this.data.changingThisBreaksApplicationSecurity;
      console.log(this.data);
    });
    this._homeservice.getPriceMobileforms()
    .subscribe((res:any) => {
      this.prices = this._sanitizer.bypassSecurityTrustHtml(res);
      this.prices = this.prices.changingThisBreaksApplicationSecurity;
      this.loader = false;
    });
  }

  reason = '';

  abrirSide(){
    $("#wrapper").toggleClass("toggled");
    $('.overlaytrabaja').addClass('active');
  }

  public cierraTrabajemos() {
    $('.overlaytrabaja').removeClass('active');
    $("#wrapper").toggleClass("toggled");
  }
}
