import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {

  data: any;
  product: any;
  
  ngOnInit() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.data = json)


    fetch('https://dummyjson.com/products/1')
      .then(res => res.json())
      .then(json => this.product = json)

  }

  constructor(private dataservice:ApiService){
    console.table(this.dataservice.getUsers());
  }
}
