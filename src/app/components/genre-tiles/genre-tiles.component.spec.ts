import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GenreTilesComponent } from './genre-tiles.component';

describe('GenreTilesComponent', () => {
  let component: GenreTilesComponent;
  let fixture: ComponentFixture<GenreTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreTilesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GenreTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
