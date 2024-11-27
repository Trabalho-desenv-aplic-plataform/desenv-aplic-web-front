import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMessageGroupComponent } from './send-message-group.component';

describe('SendMessageGroupComponent', () => {
  let component: SendMessageGroupComponent;
  let fixture: ComponentFixture<SendMessageGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendMessageGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMessageGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
