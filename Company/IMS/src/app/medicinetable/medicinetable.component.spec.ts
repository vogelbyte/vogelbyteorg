import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinetableComponent } from './medicinetable.component';

describe('MedicinetableComponent', () => {
  let component: MedicinetableComponent;
  let fixture: ComponentFixture<MedicinetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicinetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicinetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
