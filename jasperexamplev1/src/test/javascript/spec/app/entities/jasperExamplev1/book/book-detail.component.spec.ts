/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { JasperExamplev1TestModule } from '../../../../test.module';
import { BookDetailComponent } from 'app/entities/jasperExamplev1/book/book-detail.component';
import { Book } from 'app/shared/model/jasperExamplev1/book.model';

describe('Component Tests', () => {

    describe('Book Management Detail Component', () => {
        let comp: BookDetailComponent;
        let fixture: ComponentFixture<BookDetailComponent>;
        const route = ({data: of({book: new Book(123)})} as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [JasperExamplev1TestModule],
                declarations: [BookDetailComponent],
                providers: [
                    {provide: ActivatedRoute, useValue: route}
                ]
            })
            .overrideTemplate(BookDetailComponent, '')
            .compileComponents();
            fixture = TestBed.createComponent(BookDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.book).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
