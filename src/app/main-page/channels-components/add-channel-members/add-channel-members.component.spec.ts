import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChannelMembersComponent } from './add-channel-members.component';
import { MatDialogRef } from '@angular/material/dialog';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

describe('AddChannelMembersComponent', () => {
  let component: AddChannelMembersComponent;
  let fixture: ComponentFixture<AddChannelMembersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        provideAuth(() => getAuth()),
        provideDatabase(() => getDatabase()),
      ],
      declarations: [AddChannelMembersComponent],
      providers: [
        {provide: MatDialogRef, useValue: {}},
    ]
    });
    fixture = TestBed.createComponent(AddChannelMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
