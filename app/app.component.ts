import { Component } from '@angular/core';
import { TemperatureMonitorService } from './temperatureMonitor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css'],
  providers: [TemperatureMonitorService]
})
export class AppComponent {
  temperatureList: number[] =[];
  temp: number;
  width: number = 0;
  blank = false;
  median;
  limit = false;
  min= false;
  dec = false;
  
  constructor(private tempservice: TemperatureMonitorService){}
  
 recordTemperature(){
   if(this.temperatureList.length==8){
    this.limit=true; 
   }else{
     if(this.temp==null){
       this.blank= true;
     }else{
       if(this.temp%1!==0){
         this.dec = true;
       }else{
    this.temperatureList.push(this.temp);
    this.blank = false;
    this.dec = false;
    this.width = (this.temperatureList.length/8)*100;
   }
     }
   }
  }
  
  calculateMedian(){
    if(this.temperatureList.length<2){
      this.min = true;
    }else{
      this.min = false;
    var result=this.tempservice.getCurrentMedian(this.temperatureList);
    this.median = result;
  }
  }
  
}
