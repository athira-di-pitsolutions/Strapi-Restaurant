import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroImageComponent } from './hero-image.component';

describe('HeroImageComponent', () => {
  let component: HeroImageComponent;
  let fixture: ComponentFixture<HeroImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroImageComponent]
    });
    fixture = TestBed.createComponent(HeroImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
