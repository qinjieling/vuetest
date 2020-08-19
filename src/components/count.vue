<template>
  <div class="wrap">
    <div class="add">
      <!-- <h1>{{$store.state.count}}</h1> -->
      <h1>{{count}}</h1>
      <button @click="addHandle">+1</button>
      <button @click="addHandle2">+N</button>
      <button @click="addHandle3">+1 async</button>
      <button @click="addHandle4">+N async</button>
    </div>
    <div class="add">
      <!-- <h1>{{$store.getters.showNum}}</h1> -->
      <h1>{{showNum}}</h1>
      <button @click="sub()">-1</button>
      <button @click="subN(3)">-N</button>
      <button @click="subHandle3">-1 async</button>
    </div>
  </div>
</template>

<script>
//store中全局的值映射到当前组件
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
export default {
  name: 'count',
  data () {
    return {
      // count: 'Welcome'
    }
  },
  computed:{
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  },
  methods:{
    ...mapMutations(['add','addN','sub','subN']),
    ...mapActions(['subAsync']),
    addHandle(){
      this.add()
    },
    addHandle2(){
      //commit的作用：调用某个mutation函数
      // this.$store.commit('addN',3)
      this.addN(3)
    },
    addHandle3(){
      //dispatch函数专门用来触发action
      this.$store.dispatch('addAsync')
    },
    addHandle4(){
      this.$store.dispatch('addNAsync',5)
    },
    subHandle3(){
      this.subAsync()  //也可直接写在元素上
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
