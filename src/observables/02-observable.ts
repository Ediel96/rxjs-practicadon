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


    //completado
    setTimeout(()=>{
        subcriber.complete()
    }, 25000)


    return() => {
        clearInterval(interval)
        console.log('intervalo destruido')
    }

})

const obs1 = intervalo$.subscribe(observer);
const obs2 = intervalo$.subscribe(observer);
const obs3 = intervalo$.subscribe(observer);

// agregar
obs1.add(obs2).add(obs3)

setTimeout(()=>{
    obs1.unsubscribe()
},3000)