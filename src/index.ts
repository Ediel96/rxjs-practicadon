import {Observable, Observer} from 'rxjs';

const observer : Observer<any>={
    next: value => console.log('siguiente {next}: ' , value),
    error: error => console.log('error [ons]:', error),
    complete: () => console.info('completador [obs]')
}

//const obs$ = Observable.create(); 
const obs$ = new Observable<string>(subs => {
    subs.next('paso')
    subs.next('paso 1')

    subs.next('paso 2')
    subs.next('paso 3')

    //forzar un error
    //const a = undefined;
    //a.nombre = 'Hamilton ediel'

    subs.complete()

    subs.next('pasos 4')
    subs.next('paso 5')
})


obs$.subscribe(
    valor => console.log('next: ' , valor),
    valor => console.warn('next: ' , valor),
    () => console.info('Completado')
)