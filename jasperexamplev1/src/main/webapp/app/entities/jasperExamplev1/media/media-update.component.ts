import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JhiDataUtils } from 'ng-jhipster';

import { IMedia } from 'app/shared/model/jasperExamplev1/media.model';
import { MediaService } from './media.service';

@Component({
    selector: 'jhi-media-update',
    templateUrl: './media-update.component.html'
})
export class MediaUpdateComponent implements OnInit {

    media: IMedia;
    isSaving: boolean;

    constructor(
        private dataUtils: JhiDataUtils,
        private mediaService: MediaService,
        private activatedRoute: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({media}) => {
            this.media = media;
        });
    }

    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }

    setFileData(event, entity, field, isImage) {
        this.dataUtils.setFileData(event, entity, field, isImage);
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.media.id !== undefined) {
            this.subscribeToSaveResponse(
                this.mediaService.update(this.media));
        } else {
            this.subscribeToSaveResponse(
                this.mediaService.create(this.media));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IMedia>>) {
        result.subscribe((res: HttpResponse<IMedia>) =>
            this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
}
