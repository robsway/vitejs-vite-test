<script setup lang="ts">

import { inject } from 'vue'
import { IPerson } from 'Interfaces/IPerson'

interface IProps {
  Person: IPerson;
}

const foo = inject('testy')
const countTimesTwo = inject('countTimesTwo')

const props = defineProps<IProps>();
</script>

<template>
  <div style="background-color: #200">
    <span>{{ Person.Name }} - {{ foo }} - {{ countTimesTwo }}</span>
  </div>
</template>