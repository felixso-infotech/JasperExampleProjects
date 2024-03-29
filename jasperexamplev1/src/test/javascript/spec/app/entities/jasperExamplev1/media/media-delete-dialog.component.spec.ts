/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { JasperExamplev1TestModule } from '../../../../test.module';
import { MediaDeleteDialogComponent } from 'app/entities/jasperExamplev1/media/media-delete-dialog.component';
import { MediaService } from 'app/entities/jasperExamplev1/media/media.service';

describe('Component Tests', () => {

    describe('Media Management Delete Component', () => {
        let comp: MediaDeleteDialogComponent;
        let fixture: ComponentFixture<MediaDeleteDialogComponent>;
        let service: MediaService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [JasperExamplev1TestModule],
                declarations: [MediaDeleteDialogComponent]
            })
            .overrideTemplate(MediaDeleteDialogComponent, '')
            .compileComponents();
            fixture = TestBed.createComponent(MediaDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MediaService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
