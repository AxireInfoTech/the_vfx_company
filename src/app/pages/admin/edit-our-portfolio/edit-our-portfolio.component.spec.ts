import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOurPortfolioComponent } from './edit-our-portfolio.component';

describe('EditOurPortfolioComponent', () => {
  let component: EditOurPortfolioComponent;
  let fixture: ComponentFixture<EditOurPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOurPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOurPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
