import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { map } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IBook } from 'app/shared/model/jasperExamplev1/book.model';

type EntityResponseType = HttpResponse<IBook>;
type EntityArrayResponseType = HttpResponse<IBook[]>;

@Injectable({providedIn: 'root'})
export class BookService {

    public resourceUrl = SERVER_API_URL + 'api/books';

    constructor(private http: HttpClient) { }

    create(book: IBook): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(book);
            return this.http.post<IBook>(this.resourceUrl,
                     copy ,
                    { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    update(book: IBook): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(book);
            return this.http.put<IBook>(this.resourceUrl,
                     copy ,
                    { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IBook>(`${this.resourceUrl}/${id}`, { observe: 'response'})
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IBook[]>(this.resourceUrl, { params: options, observe: 'response' })
            .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }


    protected convertDateFromClient(book: IBook): IBook {
        const copy: IBook = Object.assign({}, book, {
        dateOfPublishing: book.dateOfPublishing != null && book.dateOfPublishing.isValid() ? book.dateOfPublishing.format(DATE_FORMAT) : null,
        });
        return copy;
    }

    protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
        if (res.body) {
            res.body.dateOfPublishing = res.body.dateOfPublishing != null ? moment(res.body.dateOfPublishing) : null;
        }
        return res;
    }

    protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
        if (res.body) {
            res.body.forEach ((book: IBook) => {
                book.dateOfPublishing = book.dateOfPublishing != null ? moment(book.dateOfPublishing) : null;
            });
        }
        return res;
    }
}
