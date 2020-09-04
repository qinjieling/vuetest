<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{parentValue}}</h1>
    <input type="text" v-model="number" @input="inputNumber">
    <button @click="click">按钮+1</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'HelloWorld组件',
      number:''
    }
  },
  props:{
    parentValue:{
      type:String
    }
  },
  methods:{
    click(){
      this.$emit('childFn',this.number)
    },
    inputNumber(){
      this.$emit('childFn',this.number)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
