import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TutorSignupPage } from './tutor-signup.page';

describe('TutorSignupPage', () => {
  let component: TutorSignupPage;
  let fixture: ComponentFixture<TutorSignupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorSignupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TutorSignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
