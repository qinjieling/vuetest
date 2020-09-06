<template>
  <div class="wrap">
    <my-count>哈哈哈哈哈</my-count>
    <my-hellow :parentValue="totalnum" @childFn="parentFn"></my-hellow>
    <div>子组件传来的值：{{number}}</div>
    <keep-alive>
      活动加载次数：{{count}}
    </keep-alive>
    <button @click="toAdd">跳转</button>
  </div>
</template>
<script>
import count from '@/components/count'
import HelloWorld from '@/components/HelloWorld'
export default {
  data(){
    return{
      number:'',
      totalnum:'父值',
      count:0
    }
  },
  components:{
    'my-count': count,
    'my-hellow': HelloWorld
  },
  created(){
    console.log('首页组件创建了')
    this.count++
  },
  destroyed(){
      console.log('首页组件销毁了')
  },
  methods:{
    parentFn(payload){
      this.number = payload
    },
    toAdd(){
      this.$router.push({
        path:'/add'
      })
    }
  }
}
</script>
