import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  
@Input() data:any;

constructor(){
  console.log("Stephin")
}
ngOnInit() : void{
 console.log(this.data) 
}



}
