<script setup lang="ts">
import { ref, provide, computed } from 'vue'
import { IListItem } from 'Interfaces/IListItem'
import { IPerson } from 'Interfaces/IPerson'
import { Person } from '../Data/Person'
import PersonComponent from './PersonComponent.vue'

interface ICommonProps {
  MsgThing: string;
  OtherThing: string;
  InitialCount?: number;
}

const props = withDefaults(defineProps<ICommonProps>(), {
  MsgThing: "string",
  OtherThing: "string",
  InitialCount: 20
})

const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()

const count = ref<number>(props.InitialCount)

const countTimesTwo = computed<number>(() => count.value * 2)

provide('countTimesTwo', countTimesTwo)
provide('testy', 'Hello from HelloWorld!')

type PeopleArray = Array<IPerson>;

const people: PeopleArray = Array<IPerson>(
  { Name: 'RobP' },
  { Name: 'Bob' }
)

const onClick = (arg: Event) => {
  emit('change', count.value);
  count.value++;
};
</script>

<template>
  <h2>{{ MsgThing }}</h2>
  <h3>{{ OtherThing }}</h3>

  <div class="card">
    <ul>
      <li v-for="person in people">
        <PersonComponent :Person="person"/>
      </li>
    </ul>
  </div>

  <div class="card">
    <button type="button" @click="onClick">count is {{ count }}</button>
  </div>

  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
