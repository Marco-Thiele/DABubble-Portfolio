import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateChatPageComponent } from './private-chat-page.component';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { BoxToWriteComponent } from '../box-to-write/box-to-write.component';
import { ChatContainComponent } from '../chat-contain/chat-contain.component';

describe('PrivateChatPageComponent', () => {
  let component: PrivateChatPageComponent;
  let fixture: ComponentFixture<PrivateChatPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        provideAuth(() => getAuth()),
        provideDatabase(() => getDatabase()),
      ],
      declarations: [
        PrivateChatPageComponent,
        BoxToWriteComponent,
        ChatContainComponent
      ]
    });
    fixture = TestBed.createComponent(PrivateChatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
