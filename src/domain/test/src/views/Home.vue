<template>
  <div class="home">
    <h1 style="color:red;"> 我是微应用1 </h1>
    <div style="background: green">
       <div style="color:red;"> 我是微应用1自己的store</div>
      <div>{{count}}</div>
      <div @click="addCount">addCount</div>
    </div>
    <ul style="background: pink">
      <li>我是微应用1从主应用拿到的store</li>
      <li v-for="article in articles" :key="article.id">
         <h1>{{article.title}}</h1>
          <p>{{article.body}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  computed: {
    ... mapState({
      // 箭头函数可使代码更简练
      count: state => {
        return state.test.count
      },
      articles: state => {
         return state.global.articles
      }
    })
  },
  methods: {
    ...mapActions("test", { add: "increment" }),
    addCount() {
      this.add()
    }
  }
}
</script>
