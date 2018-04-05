<template>
  <div>
    <p>test</p>
    <vue-scrollbar class="table__wrapper">
      <table>
        <thead>
        <tr>
          <th width="10%">name</th>
          <th width="10%">phone</th>
          <th width="20%">email</th>
          <th width="10%">nation</th>
          <th width="25%">city</th>
          <th width="25%">gender</th>
          <th width="25%">gender</th>
          <th width="25%">gender</th>
          <th width="25%">gender</th>
          <th width="25%">gender</th>
          <th width="25%">gender</th>
          <th width="25%">gender</th>
          <th width="25%">gender</th>
          <th width="25%">gender</th>
          <th width="25%">gender</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in dummy" :key="index">
          <td>{{item.name}}</td>
          <td>{{item.phone}}</td>
          <td>{{item.email}}</td>
          <td>{{item.nation}}</td>
          <td>{{item.city}}</td>
          <td>{{item.gender}}</td>
          <td>{{item.gender}}</td>
          <td>{{item.gender}}</td>
          <td>{{item.gender}}</td>
          <td>{{item.gender}}</td>
          <td>{{item.gender}}</td>
          <td>{{item.gender}}</td>
          <td>{{item.gender}}</td>
          <td>{{item.gender}}</td>
          <td>{{item.gender}}</td>
        </tr>
        </tbody>
      </table>
    </vue-scrollbar>
  </div>
</template>

<script>
import VueScrollbar from 'vue2-scrollbar'

const dummy = [
  {
    name: 'hubert',
    phone: '010-4305-2832',
    email: '0183052832@naver.com',
    nation: 'korea',
    city: 'hanam',
    gender: 'male'
  },
  {
    name: 'hubert',
    phone: '010-4305-2832',
    email: '0183052832@naver.com',
    nation: 'korea',
    city: 'hanam',
    gender: 'male'
  },
  {
    name: 'hubert',
    phone: '010-4305-2832',
    email: '0183052832@naver.com',
    nation: 'korea',
    city: 'hanam',
    gender: 'male'
  },
  {
    name: 'hubert',
    phone: '010-4305-2832',
    email: '0183052832@naver.com',
    nation: 'korea',
    city: 'hanam',
    gender: 'male'
  },
  {
    name: 'hubert',
    phone: '010-4305-2832',
    email: '0183052832@naver.com',
    nation: 'korea',
    city: 'hanam',
    gender: 'male'
  },
  {
    name: 'hubert',
    phone: '010-4305-2832',
    email: '0183052832@naver.com',
    nation: 'korea',
    city: 'hanam',
    gender: 'male'
  },
  {
    name: 'hubert',
    phone: '010-4305-2832',
    email: '0183052832@naver.com',
    nation: 'korea',
    city: 'hanam',
    gender: 'male'
  },
  {
    name: 'hubert',
    phone: '010-4305-2832',
    email: '0183052832@naver.com',
    nation: 'korea',
    city: 'hanam',
    gender: 'male'
  },
  {
    name: 'hubert',
    phone: '010-4305-2832',
    email: '0183052832@naver.com',
    nation: 'korea',
    city: 'hanam',
    gender: 'male'
  },
  {
    name: 'hubert',
    phone: '010-4305-2832',
    email: '0183052832@naver.com',
    nation: 'korea',
    city: 'hanam',
    gender: 'male'
  },
  {
    name: 'hubert',
    phone: '010-4305-2832',
    email: '0183052832@naver.com',
    nation: 'korea',
    city: 'hanam',
    gender: 'male'
  }
]

export default {
  name: 'Table',
  data () {
    return {
      dummy
    }
  },
  components: {
    VueScrollbar
  }
}
</script>
<style>
  @import 'vue2-scrollbar/dist/style/vue2-scrollbar.css'
</style>
