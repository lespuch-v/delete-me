import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAwesomeBlueComponentComponent } from './my-awesome-blue-component.component';

describe('MyAwesomeBlueComponentComponent', () => {
  let component: MyAwesomeBlueComponentComponent;
  let fixture: ComponentFixture<MyAwesomeBlueComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAwesomeBlueComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAwesomeBlueComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
