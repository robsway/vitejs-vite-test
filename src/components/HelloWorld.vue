<script setup lang="ts">
import { ref } from 'vue'
import { IListItem } from 'Interfaces/IListItem'
import { Person } from 'Data/Person'

const props = defineProps<{
  msg: string,
  initialCount: number
}>()

const count = ref(initialCount)

type PeopleArray = Array<People>;

const people: PeopleArray = Array<IListItem>(
  { Name: 'RobP' },
  { Name: 'Bob' }
)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <ul>
      <li v-for="person in people">
        <div>{{person.Name}}</div>
      </li>
    </ul>
  </div>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
