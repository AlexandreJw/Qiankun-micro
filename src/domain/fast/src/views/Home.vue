<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div>{{count}}</div>
    <div @click="addCount">addCount</div>
    我是从主应用拿到的
    <ul>
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
      console.log(this.articles)
      this.add()
    }
  }
}
</script>
