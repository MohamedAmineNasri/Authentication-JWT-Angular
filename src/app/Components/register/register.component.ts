import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  myForm!: FormGroup;
  constructor(private ac: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      groupe1: this.fb.group({
        first: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern('[a-zA-Z]*'),
          ],
        ],
        last: [],
        password: [],
        birthdate: [],
        monemail: [],
      }),
      profession: [],
      category: ['', Validators.required],
    });


  }
}
