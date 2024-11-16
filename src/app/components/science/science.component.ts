import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {CustomButtonComponent} from '../custom-button/custom-button.component';

@Component({
  selector: 'app-science',
  standalone: true,
  imports: [
    NgOptimizedImage,
    CustomButtonComponent
  ],
  templateUrl: './science.component.html',
  styleUrl: './science.component.css'
})
export class ScienceComponent {

}
