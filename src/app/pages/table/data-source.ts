import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';

export class DataSourceProduct extends DataSource<Product> {

    public data = new BehaviorSubject<Product[]>([]);

    connect(): Observable<Product[]> { return this.data; }

    init(products: Product[]) { this.data.next(products); }

    getTotal(): number {
        const products = this.data.getValue()
        return (products.length > 0)
            ? products.map((product) => product.price).reduce((prev, next) => prev + next, 0)
            : 0;
    }

    update(id: Product['id'], changes: Partial<Product>) {
        const products = this.data.getValue();
        const index = products.findIndex((product) => product.id === id);
        if (index === -1) { return; }
        products[index] = { ...products[index], ...changes}
        this.data.next(products);
    }

    disconnect() { }
}