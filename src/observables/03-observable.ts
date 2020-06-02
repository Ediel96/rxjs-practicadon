
import {Observable, Observer, interval, Subject} from 'rxjs';

const observer : Observer<any>={
    next: value => console.log('siguiente {next}: ' , value),
    error: error => console.log('error [ons]:', error),
    complete: () => console.info('completador [obs]')
}

const intervalo$ = new Observable <number> ( subs =>{

    const intervalID = setInterval(
        () => subs.next(Math.random()),3000 
    );

    return () => {
        clearInterval (intervalID);
        console.log('Intervalo destruir');
    }

})

/*
 *1- Costeo multiple
 *2- Tambien es un observable
 *3- Next, error y complete
*/

const subject$ = new Subject();

const subscripcion = intervalo$.subscribe(subject$);


const subs1 = subject$.subscribe( observer )
const subs2 = subject$.subscribe( observer )


setTimeout(()=>{
    subject$.next(10);
    subject$.complete();
    subscripcion.unsubscribe()
},3500)