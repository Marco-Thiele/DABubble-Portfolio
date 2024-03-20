import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailPasswordResetComponent } from './mail-password-reset.component';
import { RouterTestingModule } from '@angular/router/testing';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';

describe('MailPasswordResetComponent', () => {
  let component: MailPasswordResetComponent;
  let fixture: ComponentFixture<MailPasswordResetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        provideAuth(() => getAuth()),
        provideDatabase(() => getDatabase()),],
      declarations: [MailPasswordResetComponent]
    });
    fixture = TestBed.createComponent(MailPasswordResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
