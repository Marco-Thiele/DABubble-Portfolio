import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryChatComponent } from './secondary-chat.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { SharedService } from 'src/app/services/shared.service';

describe('SecondaryChatComponent', () => {
  let component: SecondaryChatComponent;
  let fixture: ComponentFixture<SecondaryChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[   
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        provideAuth(() => getAuth()),
        provideDatabase(() => getDatabase()),
      ],
      declarations: [
        SecondaryChatComponent,
        SharedService
      ]
    });
    fixture = TestBed.createComponent(SecondaryChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
