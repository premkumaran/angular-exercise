import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  displayedColumns: any[] = ['sn', 'productname', 'productid', 'availablequantity'];
  public dataSource: any = [];
  constructor(private http: HttpClient) {
    this.table();
  }

  ngOnInit(): void {

  }
  private table() {
    this.http.get<any>('https://uiexercise.onemindindia.com/api/Product').subscribe((data) => {
      this.dataSource = data;
      console.log("data", this.dataSource);

    })

  }
}