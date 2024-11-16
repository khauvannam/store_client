import { Component } from '@angular/core';
import {CustomButtonComponent} from '../custom-button/custom-button.component';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CustomButtonComponent, NgOptimizedImage],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {

}
