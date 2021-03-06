/**
 * Movie-detail's service unit tests
 *
 * @author Jhon Pantoja <jhon.pantoja@correounivalle.edu.co>
 *
 */

import {TestBed, inject} from '@angular/core/testing';
import {MovieDetailService} from './movie-detail.service';

describe('MovieDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({providers: [MovieDetailService]});
  });

  it('should be created', inject([MovieDetailService], (service : MovieDetailService) => {
    expect(service).toBeTruthy();
  }));
});
