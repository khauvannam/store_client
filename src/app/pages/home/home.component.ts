import {Component, OnInit} from '@angular/core';
import {SliderComponent} from '../../components/slider/slider.component';
import {DiscoverComponent} from '../../components/discover/discover.component';
import {ScienceComponent} from '../../components/science/science.component';
import {FeatureComponent} from '../../components/feature/feature.component';
import {CollectionComponent} from '../../components/collection/collection.component';
import {LocationComponent} from '../../components/location/location.component';
import {Product} from '../../../models/Product';
import {Category} from '../../../models/Category';
import {ProductService} from '../../../services/product.service';
import {CategoryService} from '../../../services/category.service';
import {BestSellerComponent} from '../../components/best-seller/best-seller.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SliderComponent,
    DiscoverComponent,
    ScienceComponent,
    FeatureComponent,
    CollectionComponent,
    LocationComponent,
    BestSellerComponent
  ],
  templateUrl: './home.component.html',

})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {
  }

  ngOnInit(): void {
    this.fetchProducts();
    this.fetchCategories();
  }

  private fetchProducts(): void {
    this.productService.getAllProducts().subscribe({
      next: (data) => (this.products = data),
      error: (error) => console.error('Error fetching products:', error),
    });
  }

  private fetchCategories(): void {
    this.categoryService.getAllCategories().subscribe({
      next: (data) => (this.categories = data),
      error: (error) => console.error('Error fetching categories:', error),
    });
  }
}
