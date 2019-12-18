import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{ProductClientService} from './services/product-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  private products:any;
  constructor(private _service:ProductClientService){}

  ngOnInit(){
    this._service.getProduct().subscribe(resp=>{
      this.products=resp;
    });
  }

}
