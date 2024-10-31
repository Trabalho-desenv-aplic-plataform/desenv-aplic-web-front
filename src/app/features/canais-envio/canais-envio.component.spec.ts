import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanaisEnvioComponent } from './canais-envio.component';

describe('CanaisEnvioComponent', () => {
  let component: CanaisEnvioComponent;
  let fixture: ComponentFixture<CanaisEnvioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanaisEnvioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanaisEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
