import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlienComponent } from './alien.component';

describe('AlienComponent', () => {
  let component: AlienComponent;
  let fixture: ComponentFixture<AlienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlienComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
