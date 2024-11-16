import { Component } from '@angular/core';
import {NewsLetterComponent} from '../news-letter/news-letter.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NewsLetterComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
