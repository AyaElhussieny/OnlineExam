import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizeCardComponent } from './quize-card.component';

describe('QuizeCardComponent', () => {
  let component: QuizeCardComponent;
  let fixture: ComponentFixture<QuizeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizeCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
