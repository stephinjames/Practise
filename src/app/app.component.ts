import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  page: string = "home";

  sname!: string;
  smobile!: number;
  smarks!: number;
  arr = ['a', 'b', 'c', 'd', 'e', 'f']

  arrobj = [{ 'Name': 'Stephin', 'MobileNo': 9730188945, 'Marks': 99 },
  { 'Name': 'Vishal', 'MobileNo': 9730188946, 'Marks': 31 },
  { 'Name': 'Shubham', 'MobileNo': 9730188947, 'Marks': 20 }
  ]

  addobject() {
    const newObject = { 'Name': this.sname, 'MobileNo': this.smobile, 'Marks': this.smarks }
    this.arrobj.push(newObject);

    this.sname = '';
    this.smobile = 0;
    this.smarks = 0;
  }


  age: number = 8;
  title = 'Project';
  name = "Ram"
  type = "text";
  MyClass = "Show"
  colour = 'yellow';
  size: number = 44;
  acutual = this.size;
  col = "3"; 

  cssObj: any = {
    'background-color': 'red',
    'color': 'white',
    'border': '10px solid black'
  }

  constructor() {
    setTimeout(() => {
      this.type = "pass";
    }, 2000);
    //alert("Hello Stephin");
  }

  activeTab = 1;
  setActiveTab(tabNumber: number) {
    this.activeTab = tabNumber;
  }

  handleChange(selectedValue: any) {
    // Your logic here to handle the selected value
    alert(selectedValue.target.value);
  }


  Onchange(EventChange: Event) {
    alert("He Is a Adult")
  }


  decrease() {
    this.size == this.size--;
  }


  increase() {
    this.size == this.size++;
  }

  getNUMBER(a: number, b: number, c: number) {
    return a + b + c
  }


  Onclick(name: string) {
    return this.name = name;
  }

  setTitle(elem: any) {
    this.title = elem.target.value
  }

  showall: boolean = false;
  EventChange() {
    this.showall = !this.showall
  }

  change: boolean = true;
  cssObj1: any;
  colourChanage() {
    
    if (this.change) {
      this.cssObj1 = {
        'background-color': 'blue',
        'color': 'white',
        'border': '10px solid black',
        'font-size': '40px'
        
      }
      this.change = false;
    }

    else {
      this.cssObj;
      this.change = true;

    }

    if(true){
        var rahul:boolean = true ;
    }


  }
}
