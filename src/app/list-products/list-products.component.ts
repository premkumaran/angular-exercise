import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor(private api: ApiserviceService) { }

  ngOnInit(): void {
    this.api.Get('Product').subscribe(data => {
      console.log(data);
    })

  }
}