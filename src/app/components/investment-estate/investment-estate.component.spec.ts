import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentEstateComponent } from './investment-estate.component';

describe('InvestmentEstateComponent', () => {
  let component: InvestmentEstateComponent;
  let fixture: ComponentFixture<InvestmentEstateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentEstateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentEstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
