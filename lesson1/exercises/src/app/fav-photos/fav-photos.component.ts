import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Very Cool Photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://theconversation.com/physics-and-psychology-of-cats-an-improbable-conversation-176020';
  image3 = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';

  constructor() { }

  ngOnInit() {
  }

}