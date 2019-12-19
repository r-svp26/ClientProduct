import { Component, OnInit } from '@angular/core';
import{ProductClientService} from '../../services/product-client.service';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})

export class FetchComponent implements OnInit {
  private getProductResponse:any;

  constructor(private _service:ProductClientService){}

  ngOnInit() {
  }
  
  public fetchProducts(id:number){
    return this._service.fetchProduct(id).subscribe(resp=>{
      this.getProductResponse=resp;
      console.log("data get ==>",this.getProductResponse)
  
    })
  }

}
