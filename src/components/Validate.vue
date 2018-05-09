<template>
  <div>
    <form @submit.prevent="validateCheck">
    <input type="text" v-validate="'required'" name="name" :class="{'input': true, 'is-danger': errors.has('name') }"/>
    <span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>
    <button type="submit">저장</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Validate',
  methods: {
    validateCheck () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          alert('Form Submitted!')
          return
        }

        alert('Correct them errors!')
      })
    }
  }
}
</script>
