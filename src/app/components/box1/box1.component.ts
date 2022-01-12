import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { BoxserviceService } from 'src/app/service/boxservice.service';
import { PeriodicElement } from '../box2/box2.component';

@Component({
  selector: 'app-box1',
  templateUrl: './box1.component.html',
  styleUrls: ['./box1.component.css'],
})
export class Box1Component implements OnInit {
  username: string = 'Hello';
  childData: string | undefined;
  value = 'aaaaa';

  constructor(
    private formBuilder: FormBuilder,
    private boxservice: BoxserviceService
  ) {}

  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: [''],
    dob: [''],
    gender: [''],
  });

  ngOnInit(): void {}

  parentMethod(data: string | undefined) {
    this.childData = data;
  }

  onSubmit() {
    console.log(this.profileForm.value);
    this.boxservice.sendData(this.profileForm.value);
  }
}
