import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {

  userform = new FormGroup({
    name: new FormControl("",[Validators.required]),
    mobile: new FormControl("",[ Validators.pattern("^[0-9]*$")]),
    email: new FormControl("",Validators.required)
    
  })
 
  saveUser(){
    console.log(this.userform)
  }

}
