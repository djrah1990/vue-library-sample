<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Sample Link</h2>
    <ul>
      <li>
        <a href="/table">
          Scroll Table
        </a>
      </li>
      <li>
        <a href="/selectbox">
          SelectBox
        </a>
      </li>
      <li>
        <a href="/slider">
          Slider
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
