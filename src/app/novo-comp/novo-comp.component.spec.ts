import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoCompComponent } from './novo-comp.component';

describe('NovoCompComponent', () => {
  let component: NovoCompComponent;
  let fixture: ComponentFixture<NovoCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
