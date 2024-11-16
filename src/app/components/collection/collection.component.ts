import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {CustomButtonComponent} from '../custom-button/custom-button.component';
import {NgForOf, NgIf} from '@angular/common';
import {Category} from '../../../models/Category';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [
    RouterLink,
    CustomButtonComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.css'
})
export class CollectionComponent {
  @Input() categories: Category[] = [];

  // Limit the description to the first 50 characters
  limitDescription(description: string): string {
    return description.length > 50 ? description.substring(0, 50) + '...' : description;
  }

  getUrl(url: string) {
    return url.replace(" ", "-").toLowerCase();
  }
}
