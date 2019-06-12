
import { Moment } from 'moment';
import { IPublisher } from 'app/shared/model/jasperExamplev1/publisher.model';

export interface IBook {
    id?: number;
    name?: string;
    dateOfPublishing?: Moment;
    coverPhotoId?: number;
    authorId?: number;
    publishers?: IPublisher[];
}

export class Book implements IBook {
    constructor(
        public id?: number,
        public name?: string,
        public dateOfPublishing?: Moment,
        public coverPhotoId?: number,
        public authorId?: number,
        public publishers?: IPublisher[],
    ) {
    }
}
