import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  data:any;
  id:any;
  title:any;
  author:any;
  users:any;
  page = '';
  updatedId:any;
  updatedTitle:any;
  updatedAuthor:any;

  constructor(private dataservice:ApiService){
    this.getUsers()
  }
  
  getUsers(){
    this.dataservice.getData().subscribe(
      (value) =>{
        console.table(this.data = value)
        
      }
    )
  }
  addUser(){
    const newObject = {'id':this.id,'title':this.title,'author':this.author}
    this.dataservice.addData(newObject).subscribe(
      (value) => {
        console.log(value);
        this.getUsers();
      }
      )

    this.id=" "
    this.title=" "
    this.author = " "

  }

  deleteUser(id:any){
    
   this.dataservice.deleteUser(id).subscribe(
    (value) =>{
      console.log(value);
      this.getUsers();
    }
   )
  }

  updateUser(obj: any) {
    // Set the current object's values in the update form fields
    this.updatedId = obj.id;
    this.updatedTitle = obj.title;
    this.updatedAuthor = obj.author;
  }

  updateObject(){
    const updatedObject = {
      title:this.updatedTitle ,
      author:this.updatedAuthor
    }

    this.dataservice.updateUser(this.updatedId,updatedObject).subscribe(
      (response) => {
        
      }
    )


  }

}
