import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../products';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  product: Product = new Product ();
  constructor( private router:Router,private api:ApiserviceService) { }

  ngOnInit(): void {
  }

  addproducts() {
    console.log(this.product);
    this.api.Post('Product', this.product).subscribe(data => { 

      console.log(data);
      

    })

    
    // this.router.navigate(['/listproducts']);
    // alert("Product Added Successfully");
  }
}
