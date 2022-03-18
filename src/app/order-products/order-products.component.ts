import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-products',
  templateUrl: './order-products.component.html',
  styleUrls: ['./order-products.component.css']
})
export class OrderProductsComponent implements OnInit {

  public orderForm: any = FormGroup;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formvalidaiton();
  }

  private formvalidaiton() {
    this.orderForm = this.formBuilder.group({
      orderId: [this.create_ID()],
      productId: ['', [Validators.required, Validators.minLength(30)]],
      quantity: ['', [Validators.required]],
      customerId: [this.create_ID()],

    });
  }

  private create_ID() {
    var dt = new Date().getTime();
    var Id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return Id;
  }

  public onSubmit() {
    if (this.orderForm.invalid) {
      console.log("invalid");
      return;
    }
    else {
      this.http.post<any>('https://uiexercise.onemindindia.com/api/OrderProducts', this.orderForm.value).subscribe((data) => {
        console.log("data", data);
        this.router.navigate(["/addproducts"])

      })
      // this.orderForm.reset();

    }
  }

}
