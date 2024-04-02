import { Component } from '@angular/core';
import { HomeService } from '../service/home.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  headerData: any;
  logoUrl!: string;

  constructor(private homeService: HomeService) {
    this.homeService.getHeaderData().subscribe(data => {
      this.headerData = data;
      this.logoUrl = environment.domainUrl + this.headerData?.data?.attributes?.Logo?.data?.attributes?.url
    });
  }

}
