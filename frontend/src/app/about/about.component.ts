import { Component } from '@angular/core';
import { AboutService } from '../service/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  aboutData: any;
  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {
    this.getAboutUsData();
  }


  getAboutUsData(): void {
    this.aboutService.getAboutUsData().subscribe({
      next: (data) => {
        this.aboutData = data.data;
        console.log(this.aboutData);
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }
}
