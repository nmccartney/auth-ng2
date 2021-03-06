import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFindComponent } from './user-find.component';

describe('UserFindComponent', () => {
  let component: UserFindComponent;
  let fixture: ComponentFixture<UserFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
