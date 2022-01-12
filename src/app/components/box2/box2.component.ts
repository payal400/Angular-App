import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { BoxserviceService } from 'src/app/service/boxservice.service';

export interface PeriodicElement {
  firstname: string;
  lastname: string;
  dob: string;
  address: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { firstname: '1', lastname: 'Hydrogen', dob: '30-04-1996', address: 'H' },
];

@Component({
  selector: 'app-box2',
  templateUrl: './box2.component.html',
  styleUrls: ['./box2.component.css'],
})
export class Box2Component implements OnInit {
  @Input()
  uname: string | undefined;

  @Output()
  notify: EventEmitter<string> = new EventEmitter<string>();

  displayedColumns: string[] = [
    'demo-firstname',
    'demo-lastname',
    'demo-address',
    'demo-dob',
  ];
  dataSource: any = [];

  constructor(private boxservice: BoxserviceService) {}

  ngOnInit(): void {
    this.boxservice.box1data$.subscribe((data) => {
      console.log('Data received from parent', data);
      let arr: any = [];
      arr.push(data);
      this.dataSource = arr;
      this.boxservice.logSubjectObservable();
    });
  }

  passData() {
    this.notify.emit('this msg is coming from child component');
  }
}
