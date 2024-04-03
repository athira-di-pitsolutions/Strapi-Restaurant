import { Component, OnInit } from '@angular/core';
import { AboutService } from '../service/about.service';

@Component({
 selector: 'app-about',
 templateUrl: './about.component.html',
 styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 aboutData: any;
 formattedCompanyHistory!: string;
 tabs!: any[];
 accordion: any;

 constructor(private aboutService: AboutService) {}

 ngOnInit(): void {
    this.getAboutUsData();
 }

 getAboutUsData(): void {
    this.aboutService.getAboutUsData().subscribe({
      next: (data) => {
        this.aboutData = data.data;
        this.formattedCompanyHistory = this.formatText(this.aboutData.attributes.CompanyHistory);
        this.tabs = this.aboutData.attributes.AboutTab.Tab;
        this.accordion = this.aboutData.attributes.AboutAccordion;
        console.log(this.aboutData);
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
 }

 formatText(text: string): string {
    return text.replace(/\n/g, '<br>');
 }
}
