import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalmitaComponent } from './falmita.component';

describe('FalmitaComponent', () => {
  let component: FalmitaComponent;
  let fixture: ComponentFixture<FalmitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FalmitaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalmitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
