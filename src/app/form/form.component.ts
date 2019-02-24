import { Component, OnInit, Output,EventEmitter  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { user } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
formGroup1:FormGroup;
 @Output() change = new EventEmitter();
  constructor(
    private formBulid:FormBuilder) //     constructorใช้ได้แค่ในconstructor เท่านั้นเลยใช้ private
     {

     }

  ngOnInit() {
  this.formGroup1= this.formBulid.group({
    firstName:this.formBulid.control('',[Validators.required,Validators.minLength(2)]),//ประกาศได้2แบบ /Validators.requiredต้องมีค่า
    lastName:['',[Validators.required,Validators.minLength(2)]],
    //mail:['',[Validators.required,this.EmilValidator]],
    mail:['',[Validators.required,Validators.email]],
    old:[22,[Validators.required,Validators.min(0),Validators.max(99)]]
  })

  }
  
 EmilValidator(control : AbstractControl){
  const value :string =control.value;
  if(value && value.includes('@')){
    return null;
  }
  
    //return {
     // acturl :value,
     // expect :'email@example'
    //}
  return {
      mail:true
    }

  
 }
  
  onSubmit1(form:FormGroup){
    console.log(form.valid,form.invalid)
    console.log((<FormControl>form.get('firstName')).errors);
    console.log(form);
   
    if(form.valid){
    console.log('if');
    const{firstName,lastName,mail,old}=form.value;
    console.log(firstName,lastName,mail,old);
    const user1 =new user(firstName,lastName,mail,old);
    this.change.emit(user1);
    console.log(user1);
    }else{
      console.log('else');
      ['firstName','lastName','mail','old'].forEach((key : string)=>{
        form.get(key).markAsTouched();//สั่งให้ทัส
        console.log((<FormControl>form.get('firstName')).errors);
        //console.log(form.get(key).touched);
      })
    }
   

  }
}
