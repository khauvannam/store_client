import {Component, Input} from '@angular/core';
import {Product} from '../../models/Product';
import {FormsModule} from '@angular/forms';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgClass
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  @Input() product: Product | null = null;
  quantity: number = 1; // Default quantity

  isVisible: { description: boolean; productUseGuide: boolean } = {description: true, productUseGuide: false};


  // Optional: Adjust quantity (min 1, max 20)
  adjustQuantity(action: string): void {
    if (action === '+' && this.quantity < 20) {
      this.quantity++;
    } else if (action === '-' && this.quantity > 1) {
      this.quantity--;
    }
  }

  // Toggle visibility of sections like description
  toggleSection(section: 'description' | 'productUseGuide'): void {
    this.isVisible[section] = !this.isVisible[section];
  }

}
