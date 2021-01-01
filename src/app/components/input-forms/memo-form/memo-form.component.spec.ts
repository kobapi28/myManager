import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MemoFormComponent } from './memo-form.component';

describe('MemoFormComponent', () => {
  let component: MemoFormComponent;
  let fixture: ComponentFixture<MemoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoFormComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MemoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
