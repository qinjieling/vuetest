<template>
    <div class="wrap">page2


        <button @click="toCount">返回</button>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    created(){
        console.log('add组件创建了')
    },
    destroyed(){
        console.log('add组件销毁了')
    },
    methods:{
        toCount(){
            this.$router.push({
                path:'/count'
            })
        }
    }
}
</script>