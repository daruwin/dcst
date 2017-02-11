/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AngularFireService } from './angular-fire.service';

describe('AngularFireService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularFireService]
    });
  });

  it('should ...', inject([AngularFireService], (service: AngularFireService) => {
    expect(service).toBeTruthy();
  }));
});
