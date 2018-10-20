import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeActorComponent } from './home-actor.component';

describe('HomeActorComponent', () => {
  let component: HomeActorComponent;
  let fixture: ComponentFixture<HomeActorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeActorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
