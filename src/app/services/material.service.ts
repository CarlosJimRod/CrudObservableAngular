import { Injectable } from '@angular/core';
import {Material} from "../models/Material";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  listadoMaterial: Material[] = [
    {id: 1, nombre: "Lapiz", descripcion: "Se usa para pintar", precio: 1},
    {id: 2, nombre: "Cuaderno", descripcion: "Para poner tus apuntes", precio: 5},
    {id: 3, nombre: "Calcualdora", descripcion: "Maquina para hacer calculos", precio: 10},
    {id: 4, nombre: "Pack reglas", descripcion: "Escuadra y cartabon", precio: 6}
  ]

  getAllMaterial():Observable<Material[]> {
    return of(this.listadoMaterial)
  }

  addMaterial(material: Material) {
    this.listadoMaterial.push(material)
  }

  deleteMaterial(id : number){
    for (let x=0; x < this.listadoMaterial.length; x++) {
      if (this.listadoMaterial[x].id == id){
        this.listadoMaterial.splice(x,1)
      }
    }
  }

  modifyPrecio(id: number, precio:number){
    for (let x=0; x < this.listadoMaterial.length; x++) {
      if (this.listadoMaterial[x].id == id){
        this.listadoMaterial[x].precio = precio
      }
    }
  }
}
