<template>
  <div id="app">
    <div>
      <span><h3>Cálculo de IMC</h3></span>
      <span><h4>Digite apenas numeros inteiros</h4></span>
      <div><span>Peso:   </span><input v-model="peso" placeholder="Digite o Peso"></div>
      <div><span>Altura: </span><input v-model="altura" placeholder="Digite a Altura"></div>
      <span><h4>Seu IMC é: {{ imc }}</h4></span><br>
      
    </div><br><br>
        ------------------------------------------------------------------------------------------------
    <div><br><br>
      <span><h3>Filtro de consoantes/vogais</h3></span>
      <span><h4>Digite o Texto</h4></span>
      <div><span>Texto Completo:   </span><input v-model="txtFilter" placeholder="Digite algum texto"></div>
      <div><span>Escolha o Modo:   </span><select v-model="selected" style="width: 170px">
        <option disabled value="">Escolha um item</option>
        <option>Vogais</option>
        <option>Consoantes</option>
      </select></div><br>
      <span><h4>Texto Filtrado: {{ filteredText }}</h4></span><br>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      peso: '',
      altura: '',
      imc: 'Insira os valores!!',
      txtFilter: '',
      filteredText: '',
      selected: ''
    }
  },
  watch: {
    peso(){
      if(!this.peso.match(/^[0-9]+$/)) this.peso = ''
      this.calculateIMC()
    }, 
    altura(){
      if(!this.altura.match(/^[0-9]+$/)) this.altura = ''
      this.calculateIMC()
    },
    txtFilter(){
      this.filterText()
    },
    selected(){
      this.filterText()
    }
  },
  methods: {
    calculateIMC(){
      if(this.peso == 0 || this.altura == 0) return
      let alturaCalculo = this.altura
      alturaCalculo = this.altura/100
      this.imc = this.peso / (alturaCalculo * alturaCalculo)
    },
    filterText(){
      if(this.txtFilter == '') return
      if(this.selected == '') return
      if(this.selected == 'Consoantes'){
        this.filteredText = this.txtFilter.replace(/[A|E|I|O|U]/ig, "")
      } else {
        this.filteredText = this.txtFilter.replace(/[^A|E|I|O|U]/ig, "")
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
