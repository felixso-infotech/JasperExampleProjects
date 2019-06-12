import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JasperExamplev1SharedModule } from 'app/shared';
import {
    PublisherComponent,
    PublisherDetailComponent,
    PublisherUpdateComponent,
    PublisherDeletePopupComponent,
    PublisherDeleteDialogComponent,
    publisherRoute,
    publisherPopupRoute
} from './';

const ENTITY_STATES = [
    ...publisherRoute,
    ...publisherPopupRoute,
];

@NgModule({
    imports: [
        JasperExamplev1SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        PublisherComponent,
        PublisherDetailComponent,
        PublisherUpdateComponent,
        PublisherDeleteDialogComponent,
        PublisherDeletePopupComponent,
    ],
    entryComponents: [
        PublisherComponent,
        PublisherUpdateComponent,
        PublisherDeleteDialogComponent,
        PublisherDeletePopupComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JasperExamplev1PublisherModule {}
