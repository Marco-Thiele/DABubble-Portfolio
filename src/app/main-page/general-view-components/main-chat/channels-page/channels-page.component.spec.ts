import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelsPageComponent } from './channels-page.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { ChatContainComponent } from '../chat-contain/chat-contain.component';
import { BoxToWriteComponent } from '../box-to-write/box-to-write.component';

describe('ChannelsPageComponent', () => {
  let component: ChannelsPageComponent;
  let fixture: ComponentFixture<ChannelsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        provideAuth(() => getAuth()),
        provideDatabase(() => getDatabase()),
      ],
      declarations: [
        ChannelsPageComponent,
        ChatContainComponent,
        BoxToWriteComponent
      ],
      providers: [
        { provide: MatDialogRef,useValue: {}},
     ],
    });
    fixture = TestBed.createComponent(ChannelsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
