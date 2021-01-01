import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GenreTileComponent } from './genre-tile.component';

describe('GenreTileComponent', () => {
  let component: GenreTileComponent;
  let fixture: ComponentFixture<GenreTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreTileComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GenreTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
