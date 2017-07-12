import { AppComponent } from './app.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { TemperatureMonitorService } from './temperatureMonitor.service';
import { By }  from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AppComponent', () => {

  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debug: DebugElement;
  let element: HTMLElement;
  let temperatureMonitorService: TemperatureMonitorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [TemperatureMonitorService]
    }).compileComponents();
  });
    
    beforeEach(()=>{
     app = new AppComponent();
     /*fixture = TestBed.createComponent(AppComponent);
     app = fixture.componentInstance;
     debug = fixture.debugElement.query(By.css('h1'));;
     temperatureMonitorService = TestBed.get(TemperatureMonitorService);
     element = debug.nativeElement;*/
    });
    
 
  it('should have a defined component', ()=>{
    expect(app).toBeDefined();
  });


  it('should set the recordTemperature method', ()=>{
    expect(app.recordTemperature).toBeDefined();
  });

  it('should return an error if decimals are entered', ()=>{
    app.temp = 5.5;
    app.recordTemperature();
    expect(app.dec).toBe(true);
  });

  it('should return an error if null values are entered', ()=>{
    app.temp = null;
    app.recordTemperature();
    expect(app.blank).toBe(true);
  });

  it('should add a number when entered to the list', ()=>{
    app.temp = 5;
    app.recordTemperature();
    expect(app.temperatureList[0]).toEqual(app.temp);
  });


});

describe('TemperatureMonitorService', ()=>{
  describe('getCurrentMedian', ()=>{
    it('should return the median', ()=>{
      let medianService = new  TemperatureMonitorService();
      expect(medianService.getCurrentMedian([2,1,5])).toBe(2);
      expect(medianService.getCurrentMedian([1,2,3,4])).toBe(2.5);
    });
  });
})


