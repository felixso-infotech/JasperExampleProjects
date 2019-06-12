
import { IBook } from 'app/shared/model/jasperExamplev1/book.model';

export interface IAuthor {
    id?: number;
    name?: string;
    books?: IBook[];
}

export class Author implements IAuthor {
    constructor(
        public id?: number,
        public name?: string,
        public books?: IBook[],
    ) {
    }
}
