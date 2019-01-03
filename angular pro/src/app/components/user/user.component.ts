import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
           name: string;
           age: number;
           email: string;
           address:{
             street: string,
             city: string,
             state: string,
           }
           hobbies : string[];
           isEdit: boolean = false;
  constructor(private dataservice:DataService) {
    console.log('constructor ran..');
   }

  ngOnInit() {
    console.log('ngOnInit ..');
    this.name = 'sachin';
    this.age = 40,
    this.email = 'sachin@gmail.com',
    this.address = {
      street : '24 main',
      city : 'bangalore',
      state : 'karnataka',
    }
    this.hobbies = ['cricket','musics','dance','watching'];
  }
  onclick(){
    this.name = 'virat';
    this.age = 30;
    this.hobbies.push('new hobby');
  }
  addHobby(hobby){
    console.log('add');
    this.hobbies.unshift(hobby);
    return false;
  }
  deleteHobby(hobby){
    for(let i = 0;i<this.hobbies.length;i++)
    {
      if(this.hobbies[i] == hobby){
      this.hobbies.splice(i, 1);
      }
    }
  }
  toggleEdit(){
    this.isEdit =!this.isEdit;
  }
}
