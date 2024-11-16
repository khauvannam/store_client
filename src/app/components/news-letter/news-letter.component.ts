import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-news-letter',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './news-letter.component.html',
  styleUrl: './news-letter.component.css'
})
export class NewsLetterComponent {

}
