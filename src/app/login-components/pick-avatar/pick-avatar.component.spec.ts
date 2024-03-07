import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickAvatarComponent } from './pick-avatar.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

describe('PickAvatarComponent', () => {
  let component: PickAvatarComponent;
  let fixture: ComponentFixture<PickAvatarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
      ],
      declarations: [PickAvatarComponent]
    });
    fixture = TestBed.createComponent(PickAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
