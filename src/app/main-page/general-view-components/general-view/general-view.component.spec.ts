import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralViewComponent } from './general-view.component';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { HeaderComponent } from '../header/header.component';
import { MainChatComponent } from '../main-chat/main-chat.component';
import { PrincipalPageComponent } from '../main-chat/principal-page/principal-page.component';
import { BoxToWriteComponent } from '../main-chat/box-to-write/box-to-write.component';

describe('GeneralViewComponent', () => {
  let component: GeneralViewComponent;
  let fixture: ComponentFixture<GeneralViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        provideAuth(() => getAuth()),
        provideDatabase(() => getDatabase()),
      ],
      declarations: [
        GeneralViewComponent,
        HeaderComponent,
        MainChatComponent,
        PrincipalPageComponent,
        BoxToWriteComponent
      ]
    });
    fixture = TestBed.createComponent(GeneralViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
