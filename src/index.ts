import { interval, timer } from 'rxjs';

const observar = {
    next: val => console.log('next:', val),
    complete: () => console.log('complete'),
}

const interval$ = interval(1000);
const timer$ = timer(5000)


console.log('inicio');
//interval$.subscribe(observar);
timer$.subscribe(observar);
console.log('fin');
