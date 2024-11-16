import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Product} from '../../../models/Product';
import {NgForOf, NgIf} from '@angular/common';
import {AppConstants} from '../../../constant/app.constants';
import {CustomButtonComponent} from '../custom-button/custom-button.component';

@Component({
  selector: 'app-best-seller',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    NgIf,
    CustomButtonComponent
  ],
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.css'
})
export class BestSellerComponent {
  @Input() products: Product[] = [];

  limitDescription(description: string): string {
    return description.length > 50 ? description.substring(0, 50) + '...' : description;
  }

  getUrl(url: string) {
    return url.replace(" ", "-").toLowerCase();
  }
}
