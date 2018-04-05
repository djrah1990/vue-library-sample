<template>
  <div class="draggable__wrapper">
    <draggable :list="dummy" class="dragArea" :options="{draggable:'.box'}">
      <div class="box" v-for="(item, index) in dummy" :key="index">
        <p>name: {{item.name}}</p>
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

const dummy = [
  {name: 'John'},
  {name: 'Jimmy'},
  {name: 'Dave'},
  {name: 'Albert'},
  {name: 'Charlie'}
]
export default {
  name: 'Draggable',
  data () {
    return {
      dummy
    }
  },
  components: {
    draggable
  }
}
</script>
