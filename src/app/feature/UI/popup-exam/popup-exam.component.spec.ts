import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupExamComponent } from './popup-exam.component';

describe('PopupExamComponent', () => {
  let component: PopupExamComponent;
  let fixture: ComponentFixture<PopupExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupExamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopupExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
