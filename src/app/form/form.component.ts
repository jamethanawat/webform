import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
formGroup:FormGroup;
  
  constructor(
    private formBulid:FormBuilder) //     constructorใช้ได้แค่ในconstructor เท่านั้นเลยใช้ private
     {

     }

  ngOnInit() {
  this.formGroup= this.formBulid.group({
    firstName:[''],
    lastName:['']
  })

  }

}
