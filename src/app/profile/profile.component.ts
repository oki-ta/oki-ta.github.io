import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public openFlg: boolean;
  constructor() { }

  ngOnInit(): void {
    this.openFlg = false;
  }

  onOpen() {
    if (!this.openFlg){
      this.openFlg = true;
    }else {
      this.openFlg = false;
    }
  }
}
