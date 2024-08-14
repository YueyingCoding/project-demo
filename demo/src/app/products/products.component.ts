import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterModule, CommonModule, RouterOutlet],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  hoveredProduct: number | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  onHover(productId: number) {
    this.hoveredProduct = productId;
    console.log(this.hoveredProduct);
  }

  onLeave() {
    this.hoveredProduct = null;
  }

  trackProduct(index: number, product: any) {
    return product.id; // unique identifier for each product
  }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8000/products/').subscribe((data) => {
      // console.log("image", data[0].images[0])
      this.products = data;
    });
  }

  onClickProduct(id: number) {
    this.router.navigate(['products', id]);
  }
}
