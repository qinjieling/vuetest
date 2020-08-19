<template>
  <div class="wrap">
    <div class="add">
      <h1>{{$store.state.count}}</h1>
      <button @click="addHandle">+1</button>
    </div>
    <div class="add">
      <h1>{{$store.state.count}}</h1>
      <button @click="subHandle">-1</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'count',
  data () {
    return {
      // count: 'Welcome'
    }
  },
  methods:{
    addHandle(){
      this.$store.commit('addN',3)
    },
    subHandle(){
      this.$store.commit('subN',3)
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
