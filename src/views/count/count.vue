<template>
  <div class="wrap">
    <my-count></my-count>
  </div>
</template>
<script>
import count from '@/components/count'
export default {
  data(){
    return{
    }
  },
  components:{
    'my-count':count
  }
}
</script>
