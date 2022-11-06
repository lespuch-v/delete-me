import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAwesomeYellowComponentComponent } from './my-awesome-yellow-component.component';

describe('MyAwesomeYellowComponentComponent', () => {
  let component: MyAwesomeYellowComponentComponent;
  let fixture: ComponentFixture<MyAwesomeYellowComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAwesomeYellowComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAwesomeYellowComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
