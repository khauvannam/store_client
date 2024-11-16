import {Component, Input} from '@angular/core';
import {Category} from '../../../models/Category';
import {RouterLink} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-discover',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    NgForOf
  ],
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.css'
})
export class DiscoverComponent {
  @Input() categories: Category[] = [];

  placeholders = Array(4).fill(null); // For loading placeholders
  getUrl(url: string) {
    return url.replace(" ", "-").toLowerCase();
  }
}
