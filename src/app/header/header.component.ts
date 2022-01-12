import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Header Component';
  showMe: boolean = false;
  name: string = '';

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.showMe = !this.showMe;
  }
}
