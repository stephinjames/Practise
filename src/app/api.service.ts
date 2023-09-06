import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000/posts/';


  constructor(private http:HttpClient) { }

  getUsers(){
  const data:any = [
      {
        "id": 1,
        "username": "Stephin",
        "usermobile": 9874561230
      },
      {
        "id": 2,
        "username": "Sham",
        "usermobile": 987456122 
      }
    ]
    return data;
  }

  getData(): Observable<any>{
  return this.http.get<any>(this.apiUrl)
  }
  
  addData(obj:any){
  return this.http.post<any>(this.apiUrl,obj)
  }
  
  deleteUser(id:any){
  return this.http.delete<any>(this.apiUrl+id);
  }

  updateUser(id:any,obj:any){
  return this.http.put(this.apiUrl+id,obj);
  }

  addtudent(student_obj:any)
  {
   return this.http.post<any>("http://localhost:3000/students",student_obj);
  }
}
