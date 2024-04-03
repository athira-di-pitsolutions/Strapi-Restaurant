import { Component, Input, OnInit } from '@angular/core';

@Component({
 selector: 'app-hero-image',
 templateUrl: './hero-image.component.html',
 styleUrls: ['./hero-image.component.css']
})
export class HeroImageComponent implements OnInit {
 @Input() imageUrl!: string; // Add this line to accept image URL as input

 constructor() { }

 ngOnInit(): void {
    // Initialization logic if needed
 }
}
