/* tslint:disable max-line-length */
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { PublisherService } from 'app/entities/jasperExamplev1/publisher/publisher.service';
import { IPublisher, Publisher,} from 'app/shared/model/jasperExamplev1/publisher.model';

describe('Service Tests', () => {

    describe('Publisher Service', () => {
        let injector: TestBed;
        let service: PublisherService;
        let httpMock: HttpTestingController;
        let elemDefault: IPublisher;
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [
                    HttpClientTestingModule
                ]
            });
            injector = getTestBed();
            service = injector.get(PublisherService);
            httpMock = injector.get(HttpTestingController);

            elemDefault = new Publisher(
                0,
                'AAAAAAA',
            )
        });

        describe('Service methods', async () => {
            it('should find an element', async () => {
                const returnedFromService = Object.assign({
                }, elemDefault);
                service
                    .find(123)
                    .pipe(take(1)).subscribe(resp => expect(resp).toMatchObject({body: elemDefault}));

                const req  = httpMock.expectOne({ method: 'GET' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should create a Publisher', async () => {
                const returnedFromService = Object.assign({
                    id: 0,
                }, elemDefault);
                const expected = Object.assign({
                }, returnedFromService);
                service
                    .create(new Publisher(null))
                    .pipe(take(1)).subscribe(resp => expect(resp).toMatchObject({body: expected}));
                const req  = httpMock.expectOne({ method: 'POST' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should update a Publisher', async () => {
                const returnedFromService = Object.assign({
                    name: 'BBBBBB',
                }, elemDefault);

                const expected = Object.assign({
                }, returnedFromService);
                service
                    .update(expected)
                    .pipe(take(1)).subscribe(resp => expect(resp).toMatchObject({body: expected}));
                const req  = httpMock.expectOne({ method: 'PUT' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should return a list of Publisher', async () => {
                const returnedFromService = Object.assign({
                    name: 'BBBBBB',
                }, elemDefault);
                const expected = Object.assign({
                }, returnedFromService);
                service
                    .query(expected)
                    .pipe(
                        take(1),
                        map(resp => resp.body)
                    ).subscribe(body  => expect(body).toContainEqual(expected));
                const req  = httpMock.expectOne({ method: 'GET' });
                req.flush(JSON.stringify([returnedFromService]));
                httpMock.verify();

            });

            it('should delete a Publisher', async () => {
                const rxPromise = service
                    .delete(123).subscribe(resp => expect(resp.ok));

                const req  = httpMock.expectOne({ method: 'DELETE' });
                req.flush({ status: 200 });
            });
        });

        afterEach(() => {
            httpMock.verify();
        });
    });
});
