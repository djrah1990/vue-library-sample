<template>
  <div class="content">
    <div class="header__wrapper">
      <span>직원계정관리</span>
      <button>신규생성</button>
    </div>
    <div class="title__wrapper">
      <table>
        <thead>
        <tr>
          <td width="10%" style="background-color:#fafafa">직원구분</td>
          <td width="20%">
            <select name="">
              <option value="">전체선택</option>
            </select>
          </td>
          <td width="10%" style="background-color:#fafafa">계정권한</td>
          <td width="20%">
            <select name="" id="">
              <option value="">전체선택</option>
            </select>
          </td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td style="background-color:#fafafa">재직상태</td>
          <td>
            <select name="">
              <option value="">전체선택</option>
            </select>
          </td>
          <td style="background-color:#fafafa">부서</td>
          <td>
            <select name="">
              <option value="">전체선택</option>
            </select>
          </td>
        </tr>
        <tr>
          <td style="background-color:#fafafa">이름</td>
          <td colspan="3">
            <input type="file" placeholder="사진추가">
            <button>찾아보기</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="content__wrapper">
      <table>
        <thead>
        <tr>
          <th width="5%">No</th>
          <th width="15%">이름</th>
          <th width="7%">구분</th>
          <th width="15%">연락처</th>
          <th width="20%">이메일</th>
          <th width="10%">권한</th>
          <th width="5%">상태</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in dummy" :key="index">
          <td>{{index + 1}}</td>
          <td>{{item.name}}</td>
          <td>{{item.sort}}</td>
          <td>{{item.phone}}</td>
          <td>{{item.email}}</td>
          <td>{{item.authority}}</td>
          <td>{{item.tkdxo}}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <pagination :records="dummy.length" :per-page="10" @paginate="setPage"></pagination>
  </div>

</template>

<script>
import {Pagination, PaginationEvent} from 'vue-pagination-2'

const dummy = [
  {
    name: '박카스',
    sort: '정규직',
    phone: '010-2525-1818',
    email: 'bakas@gmail.com',
    authority: '관리자',
    tkdxo: '재직'
  },
  {
    name: '박카스',
    sort: '정규직',
    phone: '010-2525-1818',
    email: 'bakas@gmail.com',
    authority: '관리자',
    tkdxo: '재직'
  },
  {
    name: '박카스',
    sort: '정규직',
    phone: '010-2525-1818',
    email: 'bakas@gmail.com',
    authority: '관리자',
    tkdxo: '재직'
  },
  {
    name: '박카스',
    sort: '정규직',
    phone: '010-2525-1818',
    email: 'bakas@gmail.com',
    authority: '관리자',
    tkdxo: '재직'
  },
  {
    name: '박카스',
    sort: '정규직',
    phone: '010-2525-1818',
    email: 'bakas@gmail.com',
    authority: '관리자',
    tkdxo: '재직'
  },
  {
    name: '박카스',
    sort: '정규직',
    phone: '010-2525-1818',
    email: 'bakas@gmail.com',
    authority: '관리자',
    tkdxo: '재직'
  },
  {
    name: '박카스',
    sort: '정규직',
    phone: '010-2525-1818',
    email: 'bakas@gmail.com',
    authority: '관리자',
    tkdxo: '재직'
  },
  {
    name: '박카스',
    sort: '정규직',
    phone: '010-2525-1818',
    email: 'bakas@gmail.com',
    authority: '관리자',
    tkdxo: '재직'
  },
  {
    name: '박카스',
    sort: '정규직',
    phone: '010-2525-1818',
    email: 'bakas@gmail.com',
    authority: '관리자',
    tkdxo: '재직'
  },
  {
    name: '박카스',
    sort: '정규직',
    phone: '010-2525-1818',
    email: 'bakas@gmail.com',
    authority: '관리자',
    tkdxo: '재직'
  },
  {
    name: '박카스',
    sort: '정규직',
    phone: '010-2525-1818',
    email: 'bakas@gmail.com',
    authority: '관리자',
    tkdxo: '재직'
  },
  {
    name: '박카스',
    sort: '정규직',
    phone: '010-2525-1818',
    email: 'bakas@gmail.com',
    authority: '관리자',
    tkdxo: '재직'
  },
  {
    name: '박카스',
    sort: '정규직',
    phone: '010-2525-1818',
    email: 'bakas@gmail.com',
    authority: '관리자',
    tkdxo: '재직'
  },
  {
    name: '박카스',
    sort: '정규직',
    phone: '010-2525-1818',
    email: 'bakas@gmail.com',
    authority: '관리자',
    tkdxo: '재직'
  },
  {
    name: '박카스',
    sort: '정규직',
    phone: '010-2525-1818',
    email: 'bakas@gmail.com',
    authority: '관리자',
    tkdxo: '재직'
  },
  {
    name: '박카스',
    sort: '정규직',
    phone: '010-2525-1818',
    email: 'bakas@gmail.com',
    authority: '관리자',
    tkdxo: '재직'
  },
  {
    name: '박카스',
    sort: '정규직',
    phone: '010-2525-1818',
    email: 'bakas@gmail.com',
    authority: '관리자',
    tkdxo: '재직'
  },
  {
    name: '박카스',
    sort: '정규직',
    phone: '010-2525-1818',
    email: 'bakas@gmail.com',
    authority: '관리자',
    tkdxo: '재직'
  },
  {
    name: '박카스',
    sort: '정규직',
    phone: '010-2525-1818',
    email: 'bakas@gmail.com',
    authority: '관리자',
    tkdxo: '재직'
  },
  {
    name: '박카스',
    sort: '정규직',
    phone: '010-2525-1818',
    email: 'bakas@gmail.com',
    authority: '관리자',
    tkdxo: '재직'
  },
  {
    name: '박카스',
    sort: '정규직',
    phone: '010-2525-1818',
    email: 'bakas@gmail.com',
    authority: '관리자',
    tkdxo: '재직'
  },
  {
    name: '박카스',
    sort: '정규직',
    phone: '010-2525-1818',
    email: 'bakas@gmail.com',
    authority: '관리자',
    tkdxo: '재직'
  },
  {
    name: '박카스',
    sort: '정규직',
    phone: '010-2525-1818',
    email: 'bakas@gmail.com',
    authority: '관리자',
    tkdxo: '재직'
  },
  {
    name: '박카스',
    sort: '정규직',
    phone: '010-2525-1818',
    email: 'bakas@gmail.com',
    authority: '관리자',
    tkdxo: '재직'
  },
  {
    name: '박카스',
    sort: '정규직',
    phone: '010-2525-1818',
    email: 'bakas@gmail.com',
    authority: '관리자',
    tkdxo: '재직'
  },
  {
    name: '박카스',
    sort: '정규직',
    phone: '010-2525-1818',
    email: 'bakas@gmail.com',
    authority: '관리자',
    tkdxo: '재직'
  },
  {
    name: '박카스',
    sort: '정규직',
    phone: '010-2525-1818',
    email: 'bakas@gmail.com',
    authority: '관리자',
    tkdxo: '재직'
  },
  {
    name: '박카스',
    sort: '정규직',
    phone: '010-2525-1818',
    email: 'bakas@gmail.com',
    authority: '관리자',
    tkdxo: '재직'
  },
  {
    name: '박카스',
    sort: '정규직',
    phone: '010-2525-1818',
    email: 'bakas@gmail.com',
    authority: '관리자',
    tkdxo: '재직'
  },
  {
    name: '박카스',
    sort: '정규직',
    phone: '010-2525-1818',
    email: 'bakas@gmail.com',
    authority: '관리자',
    tkdxo: '재직'
  },
  {
    name: '박카스',
    sort: '정규직',
    phone: '010-2525-1818',
    email: 'bakas@gmail.com',
    authority: '관리자',
    tkdxo: '재직'
  },
  {
    name: '박카스',
    sort: '정규직',
    phone: '010-2525-1818',
    email: 'bakas@gmail.com',
    authority: '관리자',
    tkdxo: '재직'
  },
  {
    name: '박카스',
    sort: '정규직',
    phone: '010-2525-1818',
    email: 'bakas@gmail.com',
    authority: '관리자',
    tkdxo: '재직'
  },
  {
    name: '박카스',
    sort: '정규직',
    phone: '010-2525-1818',
    email: 'bakas@gmail.com',
    authority: '관리자',
    tkdxo: '재직'
  },
  {
    name: '박카스',
    sort: '정규직',
    phone: '010-2525-1818',
    email: 'bakas@gmail.com',
    authority: '관리자',
    tkdxo: '재직'
  },
  {
    name: '박카스',
    sort: '정규직',
    phone: '010-2525-1818',
    email: 'bakas@gmail.com',
    authority: '관리자',
    tkdxo: '재직'
  },
  {
    name: '박카스',
    sort: '정규직',
    phone: '010-2525-1818',
    email: 'bakas@gmail.com',
    authority: '관리자',
    tkdxo: '재직'
  },
  {
    name: '박카스',
    sort: '정규직',
    phone: '010-2525-1818',
    email: 'bakas@gmail.com',
    authority: '관리자',
    tkdxo: '재직'
  },
  {
    name: '박카스',
    sort: '정규직',
    phone: '010-2525-1818',
    email: 'bakas@gmail.com',
    authority: '관리자',
    tkdxo: '재직'
  }
]

export default {
  name: 'Been',
  data () {
    return {
      dummy,
      page: 1,
      perPage: 10
    }
  },
  components: {
    Pagination,
    PaginationEvent
  },
  methods: {
    setPage: function (page) {
      this.page = page
      console.log(this.page)
    }
  }
}

</script>
