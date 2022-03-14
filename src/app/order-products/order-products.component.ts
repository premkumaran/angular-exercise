import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Orders } from '../products';

@Component({
  selector: 'app-order-products',
  templateUrl: './order-products.component.html',
  styleUrls: ['./order-products.component.css']
})
export class OrderProductsComponent implements OnInit {

  order:Orders=new Orders();

  constructor(private api:ApiserviceService) { }

  ngOnInit(): void {
  }
  placeOrder() {
console.log(this.order);

    this.api.Post('OrderProducts', this.order).subscribe(data => { 
     
        console.log(data);
        
    } )
    
  }

}
