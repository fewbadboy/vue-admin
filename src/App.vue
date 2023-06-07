<script setup>
import { ref, onMounted, reactive } from 'vue'
// import fetch from 'cross-fetch'
import { redHash } from '@/styles/layout.module.css'
import HelloWorld from './components/HelloWorld.vue'
import SvgIcon from './components/SvgIcon/SvgIcon.vue'

const url = ref('')
const express = reactive({
  name: '',
  one: ''
})

const cat = ref(null)

onMounted(() => {
  cat.value = redHash
})

async function click () {
  await fetch('http://172.21.9.182:3000/name', {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json' // application/x-www-form-urlencoded, multipart/form-data
    }
  })
    .then((res) => res.json())
    .then(({ name }) => {
      console.log(name)
      express.name = name
      // console.log(import.meta.env.BASE_URL)
    })

  url.value = import.meta.url
}
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank" @click.prevent="click">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <div>{{ url }}</div>
  <svg-icon name="404" icon-class="blue" />
  <div>{{ express?.name }}</div>
  <div id="cat" :class="redHash">{{ cat ?? 'who' }}</div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style lang="scss" scoped>
@import url(./styles/main.scss);
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.blue {
  color: blue;
}
</style>
