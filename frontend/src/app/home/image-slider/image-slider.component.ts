import { Component, Input, OnInit } from '@angular/core';

@Component({
 selector: 'app-image-slider',
 templateUrl: './image-slider.component.html',
 styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
 @Input() images: { url: string }[] = []; // Add this line to accept images as input
 currentIndex = 0;

 constructor() { }

 ngOnInit(): void {
    this.startSlider();
 }

 startSlider() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000); // Change image every 3 seconds
 }
}
