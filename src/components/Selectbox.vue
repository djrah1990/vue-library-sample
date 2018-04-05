<template>
  <div class="select__wrapper">
    <stf-select v-model="selected" style="min-width:209px">
      <div slot="value">
        <p>{{selected.name}}</p>
      </div>
      <stf-select-option v-for="(item, index) in dummy" :value="item" :key="index">
        {{item.name}}
      </stf-select-option>
    </stf-select>
  </div>
</template>

<script>
import { StfSelect, StfSelectOption } from 'stf-vue-select'

const dummy = [
  {name: 'John'},
  {name: 'James'},
  {name: 'Kevin'},
  {name: 'Jack'}
]
export default {
  name: 'stf-vue-select',
  data () {
    return {
      selected: dummy[0],
      dummy
    }
  },
  components: {
    StfSelect,
    StfSelectOption
  }
}
</script>
