import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { JhiAlertService,  } from 'ng-jhipster';

import { IBook } from 'app/shared/model/jasperExamplev1/book.model';
import { BookService } from './book.service';
import { IMedia } from 'app/shared/model/jasperExamplev1/media.model';
import { MediaService } from 'app/entities/jasperExamplev1/media';
import { IAuthor } from 'app/shared/model/jasperExamplev1/author.model';
import { AuthorService } from 'app/entities/jasperExamplev1/author';
import { IPublisher } from 'app/shared/model/jasperExamplev1/publisher.model';
import { PublisherService } from 'app/entities/jasperExamplev1/publisher';

@Component({
    selector: 'jhi-book-update',
    templateUrl: './book-update.component.html'
})
export class BookUpdateComponent implements OnInit {

    book: IBook;
    isSaving: boolean;

    coverphotos: IMedia[];

    authors: IAuthor[];

    publishers: IPublisher[];
    dateOfPublishingDp: any;

    constructor(
        private jhiAlertService: JhiAlertService,
        private bookService: BookService,
        private mediaService: MediaService,
        private authorService: AuthorService,
        private publisherService: PublisherService,
        private activatedRoute: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({book}) => {
            this.book = book;
        });
        this.mediaService
            .query({filter: 'book-is-null'})
            .subscribe((res: HttpResponse<IMedia[]>) => {
                if (!this.book.coverPhotoId) {
                    this.coverphotos = res.body;
                } else {
                    this.mediaService
                        .find(this.book.coverPhotoId)
                        .subscribe((subRes: HttpResponse<IMedia>) => {
                            this.coverphotos = [subRes.body].concat(res.body);
                        }, (subRes: HttpErrorResponse) => this.onError(subRes.message));
                }
            }, (res: HttpErrorResponse) => this.onError(res.message));
        this.authorService.query()
            .subscribe((res: HttpResponse<IAuthor[]>) => { this.authors = res.body; }, (res: HttpErrorResponse) => this.onError(res.message));
        this.publisherService.query()
            .subscribe((res: HttpResponse<IPublisher[]>) => { this.publishers = res.body; }, (res: HttpErrorResponse) => this.onError(res.message));
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.book.id !== undefined) {
            this.subscribeToSaveResponse(
                this.bookService.update(this.book));
        } else {
            this.subscribeToSaveResponse(
                this.bookService.create(this.book));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IBook>>) {
        result.subscribe((res: HttpResponse<IBook>) =>
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

    trackMediaById(index: number, item: IMedia) {
        return item.id;
    }

    trackAuthorById(index: number, item: IAuthor) {
        return item.id;
    }

    trackPublisherById(index: number, item: IPublisher) {
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
