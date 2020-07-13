import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
  });

  it('should render header div with a logo', () => {
    const de: DebugElement = fixture.debugElement.query(By.css('.origin-header>img'));
    const el = de.nativeElement;

    expect(fixture.nativeElement.querySelector('.origin-header')).not.toBeNull();
    expect(el).toBeTruthy();
  });

});
