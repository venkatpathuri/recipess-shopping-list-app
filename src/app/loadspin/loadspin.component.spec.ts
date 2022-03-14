import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadspinComponent } from './loadspin.component';

describe('LoadspinComponent', () => {
  let component: LoadspinComponent;
  let fixture: ComponentFixture<LoadspinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadspinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadspinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
