import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BoxserviceService } from './service/boxservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Practice-App';
  userName: string | undefined;

  constructor(private _boxservice: BoxserviceService) {
    this._boxservice.userName.subscribe((res) => {
      this.userName = res;
    });
  }

  ngOnInit(): void {}
}
