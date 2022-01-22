import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGlitchComponent } from './image-glitch.component';

describe('ImageGlitchComponent', () => {
  let component: ImageGlitchComponent;
  let fixture: ComponentFixture<ImageGlitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageGlitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageGlitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
