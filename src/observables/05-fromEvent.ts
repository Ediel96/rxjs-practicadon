import {fromEvent} from 'rxjs'

const sr1$ = fromEvent<MouseEvent>(document, 'click');
const sr2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer ={
    next: val => console.log('next', val)
}


//cordenadas x y del web
//sr1$.subscribe(observer);

//ejemplo 1
//sr1$.subscribe(event => console.log(event.clientX , event.clientY ));

//ejemplo 2
sr1$.subscribe( ({x, y}) =>{
    console.log(x,y);
}) 


//evento con la teclas key = a 'Tecla'
sr2$.subscribe(event => {
    console.log(event.key)
})