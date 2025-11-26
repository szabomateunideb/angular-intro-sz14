import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingsDirectives } from './bindings-directives';

describe('BindingsDirectives', () => {
  let component: BindingsDirectives;
  let fixture: ComponentFixture<BindingsDirectives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BindingsDirectives]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingsDirectives);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
