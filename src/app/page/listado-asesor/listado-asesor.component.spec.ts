import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoAsesorComponent } from './listado-asesor.component';

describe('ListadoAsesorComponent', () => {
  let component: ListadoAsesorComponent;
  let fixture: ComponentFixture<ListadoAsesorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoAsesorComponent]
    });
    fixture = TestBed.createComponent(ListadoAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
