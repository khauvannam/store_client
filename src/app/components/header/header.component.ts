import {Component} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {NgClass, NgForOf} from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgClass,
    NgForOf
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  categories: string[] = [
    "Dog Food", "Cat Food", "Pet Toys", "Aquarium Supplies",
    "Bird Accessories", "Reptile Supplies", "Grooming Products"
  ];
  isSectionVisible = false;

  constructor(private router: Router) {
  }

  toggleSectionVisible(state: boolean): void {
    this.isSectionVisible = state;
  }
}
