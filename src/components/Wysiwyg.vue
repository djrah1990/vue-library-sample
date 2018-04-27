<template>
  <div>
    <tinymce id="d1" v-model="data"></tinymce>
  </div>
</template>

<script>
import Tinymce from 'vue-tinymce-editor'
export default {
  name: 'Wysiwyg',
  components: {
    Tinymce
  }
}
</script>
