import { Component } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent  {

  digits: number[]=[1,2,3,4,5,6,7,8,9,10,11,12]

  
  hourHandPosition=0;
  minuteHandPosition=0;
  secondHandPosition=0;

  dateTime={
    year:'',
    month:'',
    day:'',
    hour:'',
    minute:'',
    second:''
  }

  counter!:Subscription;
  constructor(){
    
this.startClock();
  }
  // ngOnInt():void{
    
  //   console.log("hedlo00")
  
  // }
  startClock() {
     
  
    // Second=0-59| Minute =0-59| Hour-0-23|Day=1-31|Month =0-11|Year=YYYY
    this.counter=timer(0,1000).subscribe((res)=>{
      let date=new Date();
      let second=date.getSeconds();
      
      let minute=date.getMinutes();
      let hour=date.getHours();
      let day=date.getDate();
      let month=date.getMonth()+1
      let year=date.getFullYear();
      this.dateTime.year=year.toString()
      this.dateTime.month=month.toString()
      this.dateTime.day=day.toString()
      this.dateTime.hour=hour.toString()
      this.dateTime.minute=minute.toString()
      this.dateTime.second=second.toString()

      // Position Second Hand
      this.secondHandPosition=second*6
      this.minuteHandPosition=minute*6
      this.hourHandPosition=(hour>11 ? hour-12 :hour)*
      30 +Math.floor(minute/12)*6
    })
  }


}
