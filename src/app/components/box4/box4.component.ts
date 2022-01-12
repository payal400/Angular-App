import { Component, OnInit } from '@angular/core';
import { BoxserviceService } from 'src/app/service/boxservice.service';

@Component({
  selector: 'app-box4',
  templateUrl: './box4.component.html',
  styleUrls: ['./box4.component.css'],
})
export class Box4Component implements OnInit {
  userName: string | undefined;
  constructor(private _boxservice: BoxserviceService) {
    this._boxservice.userName.subscribe((res) => {
      this.userName = res;
    });
  }

  ngOnInit(): void {}
  onChange(uname: any) {
    console.log('uname=>', uname.value);
    this._boxservice.userName.next(uname.value);
  }
}
