import {from} from 'rxjs';
import {filter} from 'rxjs/operators'

const nuevoObservable = from("Wokanda A");

const nuevoObservableFiltrado = nuevoObservable.pipe(
    filter(char => char != 'A')
)


nuevoObservableFiltrado.subscribe(console.log);