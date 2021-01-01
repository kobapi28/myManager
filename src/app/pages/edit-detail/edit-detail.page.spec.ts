import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditDetailPage } from './edit-detail.page';

describe('EditDetailPage', () => {
  let component: EditDetailPage;
  let fixture: ComponentFixture<EditDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
