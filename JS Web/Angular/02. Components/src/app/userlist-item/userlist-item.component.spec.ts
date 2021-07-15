import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlistItemComponent } from './userlist-item.component';

describe('UserlistItemComponent', () => {
  let component: UserlistItemComponent;
  let fixture: ComponentFixture<UserlistItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserlistItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
