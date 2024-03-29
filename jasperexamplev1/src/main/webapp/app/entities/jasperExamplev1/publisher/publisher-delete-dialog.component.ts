import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IPublisher } from 'app/shared/model/jasperExamplev1/publisher.model';
import { PublisherService } from './publisher.service';

@Component({
    selector: 'jhi-publisher-delete-dialog',
    templateUrl: './publisher-delete-dialog.component.html'
})
export class PublisherDeleteDialogComponent {

    publisher: IPublisher;

    constructor(
        private publisherService: PublisherService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.publisherService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'publisherListModification',
                content: 'Deleted an publisher'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-publisher-delete-popup',
    template: ''
})
export class PublisherDeletePopupComponent implements OnInit, OnDestroy {

    private ngbModalRef: NgbModalRef;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private modalService: NgbModal
    ) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({publisher}) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(PublisherDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static'});
                this.ngbModalRef.componentInstance.publisher = publisher;
                this.ngbModalRef.result.then((result) => {
                    this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true, queryParamsHandling: 'merge' });
                    this.ngbModalRef = null;
                }, (reason) => {
                    this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true, queryParamsHandling: 'merge' });
                    this.ngbModalRef = null;
                });
            }, 0);
        });
    }

    ngOnDestroy() {
        this.ngbModalRef = null;
    }
}
