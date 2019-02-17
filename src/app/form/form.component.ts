import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { user } from '../user';

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
    firstName:this.formBulid.control('a'),//ประกาศได้2แบบ
    lastName:['b'],
    mail:[''],
    old:[22]
  })

  }
  onSubmit(form:FormGroup){
    console.log(form);
    const{firstName,lastName,mail,old}=form.value;
    console.log(firstName,lastName,mail,old);
    const user1 =new user(firstName,lastName,mail,old);
    console.log(user1);
}
}
