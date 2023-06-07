import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent  implements OnInit {
  @Input() bannerImages: any[] = []; 

  constructor() { }

  ngOnInit() {
    console.log(this.bannerImages)
  }

}
