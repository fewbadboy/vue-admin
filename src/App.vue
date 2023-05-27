<script setup>
import { ref, onMounted } from 'vue'
import fetch from 'cross-fetch'
import style from './styles/main.module.scss?inline'
import HelloWorld from './components/HelloWorld.vue'

const url = ref('')

onMounted(() => {
  console.log(style.red)
})

async function click() {
  const response = await fetch('http://172.21.9.182:3000/name', {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json' // application/x-www-form-urlencoded, multipart/form-data
    }
  })
  .then((res) => res.json())
  .then(data => {
    console.log(data)
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
  <HelloWorld msg="Vite + Vue" />
</template>

<style lang="scss" scoped>
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
</style>
