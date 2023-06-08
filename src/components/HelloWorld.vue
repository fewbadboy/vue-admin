<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCountNumberStore } from '@/stores/countNumber'

defineProps({
  msg: String
})

const store = useCountNumberStore()
const { count, double } = storeToRefs(store)
const { increment } = store

const number = ref(0)

function click () {
  number.value++
  increment()
}

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="click">count is {{ count }}</button>
    <p>
      Edit
      {{ number ? ' gt 0' : 'eq 0' }}
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
    <p>Double of  {{ count }} is {{ double }}</p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
