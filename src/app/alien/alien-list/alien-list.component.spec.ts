import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlienListComponent } from './alien-list.component';

describe('AlienListComponent', () => {
  let component: AlienListComponent;
  let fixture: ComponentFixture<AlienListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlienListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlienListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
