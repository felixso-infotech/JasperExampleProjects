import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JhiAlertService,  } from 'ng-jhipster';

import { IPublisher } from 'app/shared/model/jasperExamplev1/publisher.model';
import { PublisherService } from './publisher.service';
import { IBook } from 'app/shared/model/jasperExamplev1/book.model';
import { BookService } from 'app/entities/jasperExamplev1/book';

@Component({
    selector: 'jhi-publisher-update',
    templateUrl: './publisher-update.component.html'
})
export class PublisherUpdateComponent implements OnInit {

    publisher: IPublisher;
    isSaving: boolean;

    books: IBook[];

    constructor(
        private jhiAlertService: JhiAlertService,
        private publisherService: PublisherService,
        private bookService: BookService,
        private activatedRoute: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({publisher}) => {
            this.publisher = publisher;
        });
        this.bookService.query()
            .subscribe((res: HttpResponse<IBook[]>) => { this.books = res.body; }, (res: HttpErrorResponse) => this.onError(res.message));
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.publisher.id !== undefined) {
            this.subscribeToSaveResponse(
                this.publisherService.update(this.publisher));
        } else {
            this.subscribeToSaveResponse(
                this.publisherService.create(this.publisher));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IPublisher>>) {
        result.subscribe((res: HttpResponse<IPublisher>) =>
            this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    trackBookById(index: number, item: IBook) {
        return item.id;
    }

    getSelected(selectedVals: Array<any>, option: any) {
        if (selectedVals) {
            for (let i = 0; i < selectedVals.length; i++) {
                if (option.id === selectedVals[i].id) {
                    return selectedVals[i];
                }
            }
        }
        return option;
    }
}
