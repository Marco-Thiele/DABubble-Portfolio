import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelErstellenComponent } from './channel-erstellen.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';

describe('ChannelErstellenComponent', () => {
  let component: ChannelErstellenComponent;
  let fixture: ComponentFixture<ChannelErstellenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        FormsModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        provideAuth(() => getAuth()),
        provideDatabase(() => getDatabase()),
      ],
      declarations: [ChannelErstellenComponent],
      providers: [
        {provide: MatDialogRef, useValue: {}}
      ]
    });
    fixture = TestBed.createComponent(ChannelErstellenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
