import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCandidatoComponent } from './detalle-candidato.component';

describe('DetalleCandidatoComponent', () => {
  let component: DetalleCandidatoComponent;
  let fixture: ComponentFixture<DetalleCandidatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleCandidatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
