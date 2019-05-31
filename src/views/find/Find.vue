<template>
  <div class="find-wrapper">

    <div class="btn-pop">点击我选择时间</div>

    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />

  </div>
</template>
<script>
import areaList from '@/util//area.js'
import { AddressEdit } from 'vant'
export default {
  name: 'Mine',
  data () {
    return {
      areaList,
      searchResult: []
    }
  },
  components: {
    [AddressEdit.name]: AddressEdit
  },
  methods: {
    onSave () {
      console.log('save')
    },
    onDelete () {
      console.log('delete')
    },
    onChangeDetail (val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }]
      } else {
        this.searchResult = []
      }
    }
  }
}
</script>
<style lang="less" scoped>
.find-wrapper{
  //width: 100%;
  .btn-pop{
    width: 37.5px;
    border: 1px solid #000;
    font-size: 12px;
  }
}

</style>
