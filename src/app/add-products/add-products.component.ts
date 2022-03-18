import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  public addForm: any = FormGroup;

  constructor(
    public router: Router,
    public http: HttpClient,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formvalidaiton();
    console.log("productId", this.create_productID());
  }

  private formvalidaiton() {
    this.addForm = this.formBuilder.group({
      productName: ['', [Validators.required, Validators.minLength(4)]],
      productId: [this.create_productID()],
      availableQuantity: ['', [Validators.required]],
    });
  }

  private create_productID() {
    var dt = new Date().getTime();
    var productId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return productId;
  }

  public onSubmit() {
    if (this.addForm.invalid) {
      console.log("invalid");
      return;
    } else {
      console.log("addForm.values", this.addForm.value);
      this.http.post<any>('https://uiexercise.onemindindia.com/api/Product', this.addForm.value).subscribe((data) => {
        this.router.navigate(['/listproducts']);
        console.log("dataaaa", data);
      })
    }
  }
}
