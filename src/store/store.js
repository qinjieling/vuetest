import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0
  },
  //只有mutation中定义的函数才可以修改state中的数据
  mutations: {
    add(state){
      state.count ++
    },
    addN(state,step){
      state.count += step
    },
    sub(state){
      state.count --
    },
    subN(state,step){
      state.count -= step
    },
  },
  //不能直接修改state中的数据
  //必须通过context.commit()触发某个mutation才行
  actions: {
    addAsync(context){
      setTimeout(()=>{
        context.commit('add')
      },1000)
    },
    addNAsync(context,step){
      setTimeout(()=>{
        context.commit('addN',step)
      },1000)
    },
    subAsync(context){
      setTimeout(()=>{
        context.commit('sub')
      },1000)
    },
  },
  //不会修改store中的原数据，对store中已有数据进行加工处理之后形成新数据，类似computed属性
  getters:{
    showNum:status=>{
      return '当前最新数据：'+ status.count
     }
  }
})
