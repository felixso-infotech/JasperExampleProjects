import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Book } from 'app/shared/model/jasperExamplev1/book.model';
import { BookService } from './book.service';
import { BookComponent } from './book.component';
import { BookDetailComponent } from './book-detail.component';
import { BookUpdateComponent } from './book-update.component';
import { BookDeletePopupComponent } from './book-delete-dialog.component';
import { IBook } from 'app/shared/model/jasperExamplev1/book.model';

@Injectable({providedIn: 'root'})
export class BookResolve implements Resolve<IBook> {

    constructor(private service: BookService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Book> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(
                filter((response: HttpResponse<Book>) => response.ok),
                map((book: HttpResponse<Book>) => book.body)
            );
        }
        return of(new Book());
    }
}


export const bookRoute: Routes = [
    {
        path: 'book',
        component: BookComponent,
        resolve: {
            'pagingParams': JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'jasperExamplev1App.jasperExamplev1Book.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'book/:id/view',
        component: BookDetailComponent,
        resolve: {
            book: BookResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jasperExamplev1App.jasperExamplev1Book.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'book/new',
        component: BookUpdateComponent,
        resolve: {
            book: BookResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jasperExamplev1App.jasperExamplev1Book.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'book/:id/edit',
        component: BookUpdateComponent,
        resolve: {
            book: BookResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jasperExamplev1App.jasperExamplev1Book.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
];

export const bookPopupRoute: Routes = [
    {
        path: 'book/:id/delete',
        component: BookDeletePopupComponent,
        resolve: {
            book: BookResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jasperExamplev1App.jasperExamplev1Book.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
