// importar nuevas clases ----> aquellas clases que en su definicion tengan un export
import { Component } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*
  data Binding: comunicion en t.real de:
    - variables del controlador que se visualizan en la vista 
    - variables de la vista (imputs/formularios) disponibles en t.real en e controlador

  Angular es un framework (generador de tareas paara facilitar la construcion de proyectos)
    - FW basado en la
      * filosofia de los componentes (modular) --> react / vue en
      *tomo como lenguaje de progr base: TypeScript(JS Orientado a Objetos --> fuentex TIPADO
        JS --> ES6
  */
 //Variables / propiedades de clase / objeto
  title1: string = 'La mamola';
  title = 'inmobiliaria';
  edad = number = 18;
  edad1 = 18;

constructor() {
  this.edad = 45;
  this.listar();
  // setInterval(() => {
  //   this.edad = this.edad +1;
  // }, 1000;
  setInterval(this.contador, 1000)
}
  //funciones / metodo de clase (nuevo, listar ...)

  public contador() {
    console.log('contador');
    this.edad = 123;
    this.edad = this.edad ++;
    this.edad = this.edad + 1;
  }

  private listar(){
    
  }

  protected eliminar(){

  }

}
