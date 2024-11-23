import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewUsuarioComponent } from './modal-new-usuario.component';

describe('ModalNewUsuarioComponent', () => {
  let component: ModalNewUsuarioComponent;
  let fixture: ComponentFixture<ModalNewUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalNewUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNewUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
