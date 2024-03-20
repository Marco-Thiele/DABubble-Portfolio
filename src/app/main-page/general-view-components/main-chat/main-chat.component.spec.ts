import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainChatComponent } from './main-chat.component';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { PrincipalPageComponent } from './principal-page/principal-page.component';
import { BoxToWriteComponent } from './box-to-write/box-to-write.component';
import { FormsModule } from '@angular/forms';

describe('MainChatComponent', () => {
  let component: MainChatComponent;
  let fixture: ComponentFixture<MainChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        provideAuth(() => getAuth()),
        provideDatabase(() => getDatabase()),
      ],
      declarations: [
        MainChatComponent,
        PrincipalPageComponent,
        BoxToWriteComponent,],
    });
    fixture = TestBed.createComponent(MainChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
