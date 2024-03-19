import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'app-image-slider',
 templateUrl: './image-slider.component.html',
 styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
 images = [
    { url: 'assets/images/image1.jpg' },
    { url: 'assets/images/image2.jpg' },
    { url: 'assets/images/image3.jpg' }
 ];
 currentIndex = 0;

 constructor() { }

 ngOnInit(): void {
    this.startSlider();
 }

 startSlider() {
  
    setInterval(() => {
      console.log('heloo');
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      console.log(this.currentIndex);
    }, 3000); // Change image every 3 seconds
 }
}