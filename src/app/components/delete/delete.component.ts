import { Component, OnInit } from '@angular/core';
import{ProductClientService} from '../../services/product-client.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})

export class DeleteComponent implements OnInit {
  private deleteResponse:any;

  constructor(private _service:ProductClientService){}

  ngOnInit() {
  }

  public deleteProduct(id:number){
    return this._service.deleteProduct(id).subscribe(resp=>{
      this.deleteResponse=resp;
    });
  }

}
