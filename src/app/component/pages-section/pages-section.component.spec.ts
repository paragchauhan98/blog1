import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesSectionComponent } from './pages-section.component';

describe('PagesSectionComponent', () => {
  let component: PagesSectionComponent;
  let fixture: ComponentFixture<PagesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
