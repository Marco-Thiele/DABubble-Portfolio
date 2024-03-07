import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfilComponent } from './edit-profil.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

describe('EditProfilComponent', () => {
  let component: EditProfilComponent;
  let fixture: ComponentFixture<EditProfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
      ],
      declarations: [EditProfilComponent]
    });
    fixture = TestBed.createComponent(EditProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
