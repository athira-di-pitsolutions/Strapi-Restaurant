import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HomeService } from '../service/home.service';
import { environment } from 'src/environments/environment.development';

@Component({
 selector: 'app-homepage',
 templateUrl: './homepage.component.html',
 styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
 homeData = [];
 processedData: { title: string; paragraph: string }[] = [];
 sliderImages: { url: string }[] = []; // Array to hold slider images
 heroImageUrl!: string; // Variable to hold hero image URL
 restaurantsData:any[] = [];
 processedRestaurantsData:any[] = [];

 constructor(private homeService: HomeService, private cdr: ChangeDetectorRef) {}

 ngOnInit(): void {
    this.homeService.getHomeData().subscribe(data => {
      this.homeData = data.data.attributes.WelcomeMessage;
      this.processData(); // Call processData here after data is fetched

      // Extract slider images
      this.sliderImages = data.data.attributes.HomeSlider.data.map((item:any) => ({
        url: environment.domainUrl + item.attributes.formats.medium.url // Adjust the path as needed
      }));
      this.restaurantsData = data.data.attributes.restaurants.data; // Assuming the restaurants data is structured similarly
      this.processRestaurantsData(); //
      // Extract hero image URL
      this.heroImageUrl = environment.domainUrl + data.data.attributes.HeroImage.data.attributes.formats.large.url; // Adjust the path as needed
    });


 }

 processData() {
  this.processedData = []; // Reset processedData before processing
  let currentTitle = ''; // Variable to hold the current title
  let currentParagraph = ''; // Variable to hold the current paragraph

  this.homeData.forEach((item: any) => {
      if (item.type === 'paragraph') {
          const child = item.children[0];
          if (child.bold) {
              // If the current item is bold, it's a new title.
              // Save the current title and paragraph (if any) to processedData.
              if (currentTitle) {
                  this.processedData.push({ title: currentTitle, paragraph: currentParagraph });
              }
              currentTitle = child.text; // Update the current title
              currentParagraph = ''; // Reset the current paragraph
          } else {
              // If the current item is not bold, it's a paragraph.
              // Append the paragraph to the currentParagraph variable.
              currentParagraph += child.text + ' '; // Add a space for readability
          }
      }
  });
  

  // After processing, ensure the last title and paragraph are added if they haven't been.
  if (currentTitle && currentParagraph) {
      this.processedData.push({ title: currentTitle, paragraph: currentParagraph });
  }

  this.cdr.detectChanges(); // Manually trigger change detection
}

processRestaurantsData() {
  this.processedRestaurantsData = this.restaurantsData.map(restaurant => {
      return {
          name: restaurant.attributes.Name,
          description: restaurant.attributes.Description[0].children[0].text, // Assuming each restaurant has a single description
          address: restaurant.attributes.Address
      };
  });
}
}
