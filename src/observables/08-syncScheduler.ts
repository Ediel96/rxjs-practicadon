import { asyncScheduler } from 'rxjs';


const saludar = () => console.log('Hello world')
const saludarYouName = nombre => console.log(`Hello ${nombre}`)

//=> #  la funcion normal de asyncScheduler.schedule
//asyncScheduler.schedule(saludar , 2000);

//=> # la funcion con una variable adiccional 'nombre' => objeto
//asyncScheduler.schedule(saludarYouName , 2000, 'Hamilton');


const sub = asyncScheduler.schedule(function(state){
    
    console.log('state:' , state)

    //=> variable , el valor de la suma mas el tiempo
    this.schedule(state + 1 , 1000)

}, 3000 , 0);

/*
setTimeout(()=>{
    //termina el observador 
    sub.unsubscribe();
    //Tiempo
}, 6000);
*/


//=> version mas corta
asyncScheduler.schedule(() => sub.unsubscribe(), 6000)


