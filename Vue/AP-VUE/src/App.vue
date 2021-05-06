<template>
  <div id="app">
    <div>
      <span>Cálculo de IMC</span><br>
      <span>Digite apenas numeros inteiros</span><br>
      <span>Peso:   </span><input v-model="peso" placeholder="Digite o Peso"><br>
      <span>Altura: </span><input v-model="altura" placeholder="Digite a Altura"><br>
      <span>Seu IMC é: {{ imc }}</span><br>
      
    </div><br><br>
    ---------------------------------------------------------------
    <div><br><br>
      <span>Filtro de consoantes/vogais</span><br>
      <span>Digite o Texto</span><br>
      <span>Texto Completo:   </span><input v-model="txtFilter" placeholder="Digite algum texto"><br>
      <span>Escolha o Modo:   </span><select v-model="selected">
        <option disabled value="">Escolha um item</option>
        <option>Vogais</option>
        <option>Consoantes</option>
      </select><br>
      <span>Texto Filtrado: {{ filteredText }}</span><br>
      
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
