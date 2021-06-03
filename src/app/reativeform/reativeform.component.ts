import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MusicService } from '../music.service';


@Component({
  selector: 'app-reativeform',
  templateUrl: './reativeform.component.html',
  styleUrls: ['./reativeform.component.css']
})
export class ReativeformComponent{

  constructor(private fb:FormBuilder,private service:MusicService ,private route:Router){

  }

  form = this.fb.group({
    firstName:['',Validators.required],
    lastName:[''],
    dob:[''],
    selectbox:[],
    days:this.fb.group({
      sunday:[''],
      monday:[''],
      tuesday:[''],
      wednesday:[''],
      thursday:[''],
      friday:[''],
      saturday:['']
    }),
    selectedDate:[],
    textarea:[]
  })

  // form= new FormGroup({
  //   username:new FormControl('',[Validators.required,Validators.minLength(3)]),
  //   password:new FormControl('',Validators.required),
  //   checkbox:new FormControl('',Validators.required),
  //   address:new FormGroup({
  //     city:new FormControl(''),
  //     state:new FormControl(''),
  //     country:new FormControl('')
  //   })

  // })

  get username(){
    // let usercontrol = this.form.get('username')
    // console.log(usercontrol?.value)
    return this.form.get('username')
  } 

  // get password(){
  //   return this.form.get('password')
  // }



  submit(){

    this.service.getData().subscribe(data=>{
      console.log(data);
      this.route.navigate(['home'])

    })
    
    
  }

  
}
