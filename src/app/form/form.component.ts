import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
formGroup1:FormGroup;
  
  constructor(
    private formBulid:FormBuilder) //     constructorใช้ได้แค่ในconstructor เท่านั้นเลยใช้ private
     {

     }

  ngOnInit() {
  this.formGroup1= this.formBulid.group({
    firstName:this.formBulid.control(''),//ประกาศได้2แบบ
    lastName:['']
  })

  }
  onSubmit(form:FormGroup){
    console.log(form);
}
}
