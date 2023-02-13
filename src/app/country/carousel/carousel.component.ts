import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  constructor() {}

  videos:any [] = [];


 ngOnInit(){

  // this.videos = [
  //   {class: 'item active', url: "https://player.vimeo.com/external/566662150.sd.mp4?s=0a9b8fe09a2268e55950d00182b4a9bbb52eccbe&profile_id=164&oauth2_token_id=57447761"},
  //   {class: 'item', url: "https://player.vimeo.com/external/384996504.sd.mp4?s=03305cf73e0f52d4af1b2dc129b75dd2b4d3e029&profile_id=164&oauth2_token_id=57447761"},
  //   {class: 'item', url: "https://player.vimeo.com/external/363737105.sd.mp4?s=ed5d8790d07ac8b5a7641fe4d816b00c1e049935&profile_id=164&oauth2_token_id=57447761"},
  // ] 
}

}
