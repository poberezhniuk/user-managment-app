import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageNotAutorizedComponent } from './message-not-autorized.component';

describe('MessageNotAutorizedComponent', () => {
  let component: MessageNotAutorizedComponent;
  let fixture: ComponentFixture<MessageNotAutorizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageNotAutorizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageNotAutorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
