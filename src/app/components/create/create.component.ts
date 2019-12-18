import { Component, OnInit } from '@angular/core';
import{ProductClientService} from '../../services/product-client.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  private createResponse:any;

  constructor(private _service:ProductClientService){}

  ngOnInit() {
  }

  public createProduct(product:any){
      return this._service.createProduct(product).subscribe(resp=>{
      this.createResponse=resp;
    });
  }

}
