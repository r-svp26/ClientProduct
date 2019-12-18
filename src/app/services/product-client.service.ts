import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductClientService {
  url:string='http://localhost:2020/api/product/';

  constructor(private _httpClient:HttpClient) { }

  public getProduct():any{
    return this._httpClient.get(this.url);
  }

  public createProduct(product):any{
    return this._httpClient.post(this.url,product);
  }

  public updateProduct(product):any{
    return this._httpClient.put(this.url,product);
  }

  // public fetchProduct(id:number):any{
  //   return this._httpClient.get(this.url+id);
  // }

  public deleteProduct(id:number):any{
    return this._httpClient.delete(this.url+id);
  }
  
}
