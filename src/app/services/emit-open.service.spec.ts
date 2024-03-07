import { TestBed } from '@angular/core/testing';

import { EmitOpenService } from './emit-open.service';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

describe('EmitOpenService', () => {
  let service: EmitOpenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
      ],
    });
    service = TestBed.inject(EmitOpenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
