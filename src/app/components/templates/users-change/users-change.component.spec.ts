import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersChangeComponent } from './users-change.component';

describe('UsersChangeComponent', () => {
  let component: UsersChangeComponent;
  let fixture: ComponentFixture<UsersChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
