
import { IBook } from 'app/shared/model/jasperExamplev1/book.model';

export interface IPublisher {
    id?: number;
    name?: string;
    books?: IBook[];
}

export class Publisher implements IPublisher {
    constructor(
        public id?: number,
        public name?: string,
        public books?: IBook[],
    ) {
    }
}
