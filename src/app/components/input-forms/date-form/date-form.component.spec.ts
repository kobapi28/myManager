import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DateFormComponent } from './date-form.component';

describe('DateFormComponent', () => {
  let component: DateFormComponent;
  let fixture: ComponentFixture<DateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateFormComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
