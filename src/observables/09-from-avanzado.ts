import { of, from } from 'rxjs';

/*
**of = toma argumentos y genera una secuencia
**from ==
*/

const observer = {
    next: val => console.log('next:' , val),
    complete: () => console.log('complete'),
}

//const source$ = from([1,2,3,4,5,6,7,8])
//const source2$ = of('Hamilton Ediel')

const source$ = from( fetch('https://api.github.com/users/Ediel96') )


const miGenerador = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}


const miIterable = miGenerador();

/*
for (let id of  miIterable){
    console.log(id)
}*/

from(miIterable).subscribe(observer)


/*
source$.subscribe( async (resp) =>{
    
    console.log(resp)

    const dataResp = await resp.json();
    console.log(dataResp); 
})
*/

