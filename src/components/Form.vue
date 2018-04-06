<template>
  <div class="form__wrapper">
    <masked-input class="input--text" type="text" placeholder="Date (YYYY-MM-DD)" :keepCharPosition="true" :mask="dateMask"></masked-input>
    <masked-input  class="input--text" type="text" placeholder="Time (HH:MM)" :keepCharPosition="true" :mask="timeMask"></masked-input>
    <masked-input class="input--text" type="text" placeholder="DateTime (YYYY-MM-DD HH:MM)" :keepCharPosition="true" :mask="dateTimeMask"></masked-input>
    <masked-input class="input--text" type="text" placeholder="Phone" :keepCharPosition="true" :mask="phoneMask" @blur="setPhone()" v-model="phone"></masked-input>
    <masked-input class="input--text" type="text" placeholder="Email" :keepCharPosition="true" :mask="emailMask"></masked-input>
  </div>
</template>

<script>
import MaskedInput from 'vue-text-mask'
import emailMask from 'text-mask-addons/dist/emailMask'

export default {
  name: 'Form',
  data () {
    return {
      phone: '',
      dateMask: [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/],
      timeMask: [/\d/, /\d/, ':', /\d/, /\d/],
      dateTimeMask: [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, ' ', /\d/, /\d/, ':', /\d/, /\d/],
      phoneMask: [/[0]/, /[1]/, /[0, 1, 7, 8, 9]/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
      emailMask
    }
  },
  components: {
    MaskedInput
  },
  methods: {
    setPhone () {
      const phoneCheck = this.phone.substring(12, 13)
      if (phoneCheck === '_') {
        this.phone = `${this.phone.substring(0, 3)}-${this.phone.substring(4, 7)}-${this.phone.substring(7, 8)}${this.phone.substring(9, 12)}`
      }
    }
  }
}
</script>
