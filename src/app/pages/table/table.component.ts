import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  public products: Product[] = [];
  public columns: string[] = ['id', 'title', 'price', 'cover'];
  public total = 0;

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.httpClient.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe((data) => {
      // console.log('data', data);
      this.products = data;
      this.total = (this.products.length > 0)
        ? this.products.map((product) => product.price).reduce((prev, next) => prev + next, 0)
        : 0;
    });
  }

}