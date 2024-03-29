/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { JasperExamplev1TestModule } from '../../../../test.module';
import { AuthorDetailComponent } from 'app/entities/jasperExamplev1/author/author-detail.component';
import { Author } from 'app/shared/model/jasperExamplev1/author.model';

describe('Component Tests', () => {

    describe('Author Management Detail Component', () => {
        let comp: AuthorDetailComponent;
        let fixture: ComponentFixture<AuthorDetailComponent>;
        const route = ({data: of({author: new Author(123)})} as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [JasperExamplev1TestModule],
                declarations: [AuthorDetailComponent],
                providers: [
                    {provide: ActivatedRoute, useValue: route}
                ]
            })
            .overrideTemplate(AuthorDetailComponent, '')
            .compileComponents();
            fixture = TestBed.createComponent(AuthorDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.author).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
