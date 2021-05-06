import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  peso = null;
  altura = null;
  imc = null;
  filteredText = null;
  selected = null;
  txtFilter = null;

  
  public calculateIMC() {
    if(this.peso == null || this.altura == null) return
    if(!this.altura.match(/^[0-9]+$/) || !this.peso.match(/^[0-9]+$/)) {
      this.altura = null
      this.peso = null
      alert ('Escreva apenas numeros inteiros!')
      return
    }
    let alturaCalculo = this.altura
    alturaCalculo = this.altura/100
    this.imc = this.peso / (alturaCalculo * alturaCalculo)
  }

  public filterText(){
    if(this.txtFilter == '') return
    if(this.selected == '') return
    if(this.selected == 'Consoantes'){
      this.filteredText = this.txtFilter.replace(/[A|E|I|O|U]/ig, "")
    } else {
      this.filteredText = this.txtFilter.replace(/[^A|E|I|O|U]/ig, "")
    }
  }
}
