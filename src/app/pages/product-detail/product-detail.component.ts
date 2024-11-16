import {Component, OnInit} from '@angular/core';
import {Product} from '../../../models/Product';
import {ProductService} from '../../../services/product.service';
import {ActivatedRoute} from '@angular/router';
import {DetailComponent} from '../../detail/detail.component';
import {OverviewsComponent} from '../../components/overviews/overviews.component';
import {CommentsComponent} from '../../components/comments/comments.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    DetailComponent,
    OverviewsComponent,
    CommentsComponent
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})

export class ProductDetailComponent implements OnInit {
  product: Product | null = null; // Initialize as null to handle case where product is not yet fetched

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute // ActivatedRoute to get route params
  ) {
  }

  ngOnInit(): void {
    // Fetch the product ID from the route parameter and convert it to a number
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      const id = Number(productId); // Convert to a number
      if (!isNaN(id)) {
        this.fetchProductById(id); // Fetch the product by the number ID
      } else {
        console.error('Invalid product ID');
      }
    }
  }

  private fetchProductById(id: number): void {
    this.productService.getProductById(id).subscribe({
      next: (data: Product) => {
        this.product = data; // Assign the fetched product to the product variable
      },
      error: (error) => {
        console.error('Error fetching product:', error);
      },
    });
  }
}
