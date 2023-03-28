import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixelSectionComponent } from './pixel-section.component';

describe('PixelSectionComponent', () => {
  let component: PixelSectionComponent;
  let fixture: ComponentFixture<PixelSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PixelSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PixelSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
