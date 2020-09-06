<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <keep-alive>
      <h1 :class="{'changeColor':ifclick}">{{parentValue}}</h1>
    </keep-alive>
    <input type="text" v-model="number" @input="inputNumber">
    <button @click="click">修改颜色</button>
    <button @click="toAdd">跳转</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'HelloWorld组件',
      number:'',
      ifclick:false,
    }
  },
  props:{
    parentValue:{
      type:String
    }
  },
  created(){
    console.log('count组件创建了')
  },
  destroyed(){
    console.log('count组件销毁了')
  },
  methods:{
    click(){
      this.$emit('childFn',this.number)
      this.ifclick = true
    },
    inputNumber(){
      this.$emit('childFn',this.number)
    },
    toAdd(){
      this.$router.push({
        path:'/add'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.changeColor{
  color: #ff0000;
}
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
