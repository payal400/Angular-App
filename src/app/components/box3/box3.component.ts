import { Component, OnInit } from '@angular/core';
import { BoxserviceService } from 'src/app/service/boxservice.service';

@Component({
  selector: 'app-box3',
  templateUrl: './box3.component.html',
  styleUrls: ['./box3.component.css'],
})
export class Box3Component implements OnInit {
  userName: string | undefined;
  constructor(private _boxservice: BoxserviceService) {
    this._boxservice.userName.subscribe((res) => {
      this.userName = res;
    });
  }

  ngOnInit(): void {}
  onChange(uname: any) {
    //console.log('uname=>', uname.value);
    this._boxservice.userName.next(uname.value);
  }
}
