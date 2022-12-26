import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingsCrudLibComponent } from './kings-crud-lib.component';

describe('KingsCrudLibComponent', () => {
  let component: KingsCrudLibComponent;
  let fixture: ComponentFixture<KingsCrudLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KingsCrudLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KingsCrudLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
