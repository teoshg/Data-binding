import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput', { static: true }) campoValorInput: ElementRef;

  

  incrementa(){
    //this.valor++;
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valor});
    
  }

  decrementa(){
    //this.valor--
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.valor});
    
  }

  constructor() { }

  ngOnInit() {
  }

}
