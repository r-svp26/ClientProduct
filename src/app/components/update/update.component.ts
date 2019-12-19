import { Component, OnInit } from '@angular/core';
import{ProductClientService} from '../../services/product-client.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  private updateResponse:any;

  constructor(private _service:ProductClientService){}

  ngOnInit() {
  }

  public updateProducts(product:any){
    console.log("Method colled out side body ==>",product)
    return this._service.updateProduct(product).subscribe(resp=>{
      this.updateResponse=resp;
    });
  }

}
