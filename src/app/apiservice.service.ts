import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  public providers_id: any = [];
  public sharedata: any;
  public BASE_URL: string="https://uiexercise.onemindindia.com/api/";





  constructor(private http: HttpClient) { }

  public Post(url:any, data:any) {
    return this.http.post(this.BASE_URL + url, data,{responseType: 'json'});
  }

  public Get(url:any) {
    return this.http.get(this.BASE_URL + url,{responseType: 'json'});
  }
  }

  

