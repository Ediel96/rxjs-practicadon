import {Observable, Observer, interval} from 'rxjs';

const observer : Observer<any>={
    next: value => console.log('siguiente {next}: ' , value),
    error: error => console.log('error [ons]:', error),
    complete: () => console.info('completador [obs]')
}

const intervalo$ = new Observable( subcriber => { 
    
    // Crear un contador
    let cont = 0;

    const interval = setInterval(()=>{
        //cada segundo
        cont ++;
        subcriber.next(cont);
        console.log(cont)

    }, 1000)


    return() => {
        clearInterval(interval)
        console.log('intervalo destruido')
    }

})

const obs = intervalo$.subscribe(num => console.log('Num: ', num));

setTimeout(()=>{
    obs.unsubscribe()
},3000)