import { Component } from '@angular/core';
import { TemperatureMonitorService } from './temperatureMonitor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css'],
  providers: [TemperatureMonitorService]
})
export class AppComponent {
  temperatureList: number =[];
  temp: number;
  width: number = 0;
  median;
  limit = false;
  min= false;
  
  constructor(private tempservice: TemperatureMonitorService){}
  
 recordTemperature(){
   if(this.temperatureList.length==8){
    this.limit=true; 
   }else{
    this.temperatureList.push(this.temp);
    this.width = (this.temperatureList.length/8)*100;
   }
  }
  
  calculateMedian(){
    if(this.temperatureList.length<2){
      this.min = true;
    }else{
      this.min = false;
    var sortedList = this.temperatureList.sort((a,b)=> a-b);
    var result=this.tempservice.getCurrentMedian(sortedList);
    this.median = result;
  }
  }
  
}
