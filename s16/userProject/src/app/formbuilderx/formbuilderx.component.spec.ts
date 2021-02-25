import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbuilderxComponent } from './formbuilderx.component';

describe('FormbuilderxComponent', () => {
  let component: FormbuilderxComponent;
  let fixture: ComponentFixture<FormbuilderxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormbuilderxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormbuilderxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
