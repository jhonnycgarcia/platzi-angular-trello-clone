import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { DataSourceProduct } from './data-source';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  public dataSource$: DataSourceProduct = new DataSourceProduct();
  public columns: string[] = ['id', 'title', 'price', 'cover', 'actions'];
  public total = 0;

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.httpClient.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe((data) => {
      // console.log('data', data);

      // this.products = data;
      this.dataSource$.init(data);

      this.total = this.dataSource$.getTotal();
    });
  }

  update(product: Product): void {
    console.log('update', product);
    this.dataSource$.update(product.id, {price: 20});
  }

}