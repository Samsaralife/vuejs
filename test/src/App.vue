<template>
  <div id="app">
    <div>
    <h1>Index</h1>
    <input type="text" v-model="loginInfo.message" placeholder="please enter url" />
    <button @click="submit">Submit</button><br/>
    <section>
      <h3>Request Result</h3>
      <p>
        <textarea cols="30" rows="10" v-model="responseResult"></textarea>
        <button @click="send">Send</button>
      </p>
    </section>
    </div>
    <div>
      <h3>Consequence</h3>
      <table border="1" cellpadding="1" cellspacing="1">
        <tr>
          <th>电影名称</th>
          <th>电影评价</th>
          <th>上映时间</th>
        </tr>
        <tr v-for="(item, index) in result"
        :key="index">
        <template v-for="(items,indexs) in item">
            <td :key="indexs">{{items}}</td>
        </template>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      loginInfo: {message: ''},
      info: null,
      j: '',
      consequence: [],
      responseResult: [],
      result: []
    }
  },
  methods: {
    submit () {
      var url = this.HOST + '/movie/in_theaters'
      this.j = this.j + 1
      this.$http.get(url).then(response => (this.responseResult = JSON.stringify(response.data.subjects[this.j - 1].title))
      ).catch(error => {
        console.log(error)
        this.errored = true
      })
    },
    send () {
      this.consequence = this.responseResult
      for (var i = 0; i <= this.responseResult.length; i++) {
        this.result.push(this.consequence[i])
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
