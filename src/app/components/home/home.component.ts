import { Component, OnInit, TemplateRef } from '@angular/core';
import { ProductClientService } from 'src/app/services/product-client.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private products:any;
  createResponse: any;
  constructor(private _service:ProductClientService,private dialog:MatDialog){}

  ngOnInit(){
    this.getAllProduct()
  }
  getAllProduct() {
    this._service.getProduct().subscribe(resp=>{
      this.products=resp;
    });
  }
  createProductsDialog(testTemp:TemplateRef<any>){
    this.dialog.open(testTemp)
  }
  public createProduct(product:any){
    this.dialog.closeAll()
    return this._service.createProduct(product).subscribe(resp=>{
    this.createResponse=resp;
    this.getAllProduct()

  });
}
}
