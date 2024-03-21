import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HomeService } from '../service/home.service';

@Component({
 selector: 'app-homepage',
 templateUrl: './homepage.component.html',
 styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
 homeData = [];
 processedData: { title: string; paragraph: string }[] = [];

 constructor(private homeService: HomeService, private cdr: ChangeDetectorRef) {}

 ngOnInit(): void {
    this.homeService.getHomeData().subscribe(data => {
      console.log(data);
      this.homeData = data.data.attributes.WelcomeMessage;
      this.processData(); // Call processData here after data is fetched
    });
 }

 processData() {
    this.processedData = []; // Reset processedData before processing
    this.homeData.forEach((item: any) => {
      if (item.type === 'paragraph') {
        const child = item.children[0];
        if (child.bold) {
          this.processedData.push({ title: child.text, paragraph: '' });
        } else {
          const lastItem = this.processedData[this.processedData.length - 1];
          if (lastItem) {
            lastItem.paragraph = child.text;
          }
        }
      }
    });
    this.cdr.detectChanges(); // Manually trigger change detection
 }
}
