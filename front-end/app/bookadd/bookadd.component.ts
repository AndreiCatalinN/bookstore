import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-bookadd',
  templateUrl: './bookadd.component.html',
  styleUrls: ['./bookadd.component.css']
})
export class BookaddComponent implements OnInit {

  bookForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      isbn: ['', Validators.required],
      title: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.bookForm);
    console.log('submitted');
  }


}
