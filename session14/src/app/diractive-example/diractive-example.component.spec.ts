import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiractiveExampleComponent } from './diractive-example.component';

describe('DiractiveExampleComponent', () => {
  let component: DiractiveExampleComponent;
  let fixture: ComponentFixture<DiractiveExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiractiveExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiractiveExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
