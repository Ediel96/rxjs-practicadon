import {fromEvent} from 'rxjs'

const sr1$ = fromEvent(document, 'click');
const sr2$ = fromEvent(document, 'keyup');

const observer ={
    next: val => console.log()
}

