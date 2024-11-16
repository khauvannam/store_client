import {Component, Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-overviews',
  standalone: true,
  imports: [],
  templateUrl: './overviews.component.html',
  styleUrl: './overviews.component.css'
})
export class OverviewsComponent {
  @Input() productName:undefined | string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value'] && changes['value'].currentValue) {
      this.productName = changes['value'].currentValue; // Update buttonText whenever 'value' input changes
    }
  }
}
