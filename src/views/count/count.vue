<template>
  <div class="wrap">
    <my-count></my-count>
    <my-hellow :parentValue="totalnum" @childFn="parentFn"></my-hellow>
    <div>子组件传来的值：{{number}}</div>
  </div>
</template>
<script>
import count from '@/components/count'
import HelloWorld from '@/components/HelloWorld'
export default {
  data(){
    return{
      number:'',
      totalnum:'父值'
    }
  },
  components:{
    'my-count': count,
    'my-hellow': HelloWorld
  },
  methods:{
    parentFn(payload){
      this.number = payload
    }
  }
}
</script>
