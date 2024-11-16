import { Component } from '@angular/core';
import {CustomButtonComponent} from '../custom-button/custom-button.component';

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [
    CustomButtonComponent
  ],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.css'
})
export class FeatureComponent {

}
