import {Component, EventEmitter, Input, Output, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [],
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent implements OnChanges {
  @Input() value: string = '';  // Default text
  @Output() onClickCallback: EventEmitter<void> = new EventEmitter<void>();  // EventEmitter to emit click event

  isLoading = false;  // Loading state
  buttonText = '';    // Dynamic button text based on loading state

  constructor() {
  }

  // Lifecycle hook to handle input changes
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value'] && changes['value'].currentValue) {
      this.buttonText = changes['value'].currentValue; // Update buttonText whenever 'value' input changes
    }
  }

  async handleClick() {
    this.isLoading = true;
    this.buttonText = 'Loading...';  // Change button text to "Loading..."

    // Simulate an asynchronous operation (e.g., API call)
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Emit the callback after the loading operation is done
    this.onClickCallback.emit();

    this.isLoading = false;  // Stop loading
    this.buttonText = this.value;  // Reset button text back to original
  }
}
