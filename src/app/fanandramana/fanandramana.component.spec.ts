import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanandramanaComponent } from './fanandramana.component';

describe('FanandramanaComponent', () => {
  let component: FanandramanaComponent;
  let fixture: ComponentFixture<FanandramanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FanandramanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FanandramanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
