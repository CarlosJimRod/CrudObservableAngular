import { Component } from '@angular/core';
import {MaterialService} from "../../services/material.service";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  id: number = 5
  nombre: string = ""
  descripcion: string = ""
  precio: number = 0

  constructor(private materialService: MaterialService) {
  }

  saveMaterial() {
    this.materialService.addMaterial({
      id: this.id,
      nombre: this.nombre,
      descripcion: this.descripcion,
      precio: this.precio,
    })
    this.id++
    this.cleanInput()
  }

  cleanInput() {
    this.nombre = ""
    this.descripcion = ""
    this.precio = 0
  }
}
