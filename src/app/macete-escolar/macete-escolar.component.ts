import { Component } from '@angular/core';

@Component({
  selector: 'app-macete-escolar',
  templateUrl: './macete-escolar.component.html',
  styleUrls: ['./macete-escolar.component.css']
})
export class MaceteEscolarComponent {
  // Define a property to hold the active state of a star
  activeStarIndex: number | null = null;

  handleClick(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement; // Assuming event target is an HTMLElement

    // Check if clicked element has the 'star-icon' class
    if (clickedElement.classList.contains('star-icon')) {
      // Get the index of the clicked star icon within the stars array (assuming you have one)
      const clickedIndex = Array.from(clickedElement.parentElement?.querySelectorAll('.star-icon') || [])
        .indexOf(clickedElement);

      // Update the activeStarIndex property
      this.activeStarIndex = clickedIndex;
    }
  }
}
