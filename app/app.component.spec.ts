import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    });
    TestBed.compileComponents();
  });


it('true is true', () => expect(true).toBe(true));

/*it('test the component renders',() => {      
        fixture = TestBed.createComponent(AppComponent);
        comp = fixture.componentInstance; 
        fixture.detectChanges();
        expect(comp).toBeDefined();
    }); 
  */
  
 /* it(`input should accept only numbers`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(typeof(app.temp)).toEqual('number');
  }));*/
  
   it(`should have limit defined`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.limit).toEqual('false');
  });
  
});



