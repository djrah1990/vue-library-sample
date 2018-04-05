<template>
  <div class="slider__wrapper">
    <vue-slider ref="slider" v-model="value"></vue-slider>
    <br/>
    <br/>
    <br/>
    <vue-slider ref="slider2" v-model="options.value"
                :value="options.value"
                :width="'80%'"
                :piecewise="true" :piecewiseLabel="true" :data="options.data" :style="options.style"
                :piecewiseStyle="options.piecewiseStyle" :piecewiseActiveStyle="options.piecewiseActiveStyle"
                :labelActiveStyle="options.labelActiveStyle"></vue-slider>
    <br/>
    <p class="title">Value: <span>{{options.value}}</span></p>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'

const options = {
  data: [
    '0.5',
    '1.0',
    '1.5',
    '2.0',
    '2.5',
    '3.0'
  ],
  style: {
    'margin-left': '10%'
  },
  piecewiseStyle: {
    'backgroundColor': '#ccc',
    'visibility': 'visible',
    'width': '12px',
    'height': '12px'
  },
  piecewiseActiveStyle: {
    'backgroundColor': '#3498db'
  },
  labelActiveStyle: {
    'color': '#3498db'
  },
  value: 0
}
export default {
  name: 'Slider',
  data () {
    return {
      value: 30,
      options
    }
  },
  components: {
    VueSlider
  }
}
</script>
