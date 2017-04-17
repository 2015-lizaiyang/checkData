<template lang="html">
  <transition-group class="list-content" name="flip-list" tag="ul">
    <router-link tag='li' :to="{name:'accountsShow',params: {id:item.SERVERPARTSHOP_ID}}" v-for="item in list" :key="item">
      <list-account :width='85'>
        <span slot='names'>门店名称:</span>
        <span slot='names'>门店编码:</span>
        <p slot='val'>{{ item.SHOPNAME }}</p>
        <p slot='val'>{{ item.SHOPCODE }}</p>
      </list-account>
    </router-link>
  </transition-group>
</template>

<script>
import mixins from '../assets/mixin'
import listAccount from './list-account.vue'
export default {
  data() {
    return {
      list: [],
      ID: null
    }
  },
  mixins: [mixins],
  components: {
    listAccount
  },
  watch: {
    value: function (e) {
      if(!(e.match(/^[ ]*$/))){
        this.list.forEach((elem, index, arr) => {
          if (elem.SHOPNAME.search(e.trim()) !== -1) {
            this.list.splice(index,1)
            this.list.unshift(elem)
          }
        })
      }
    }
  },
  mounted() {
    this.ID = this.$route.params.id
    this.getDatas();
  },
  methods: {
    getDatas () {
      Bus.$emit('loading', true)
      this.$remote.get(`?action_type=getServerPartShop&action_data=${this.ID}`).then( response => {
        setTimeout(() => {
          Bus.$emit('loading', false)
        }, 1000)
        if(response.status === 200) {
          this.list = response.data.ServerPartShopObject
        }
      })
    }
  }
}
</script>

<style lang="css" scoped>
.list-content {
  margin-top: 100px;
}
.list-content li{
  margin: 10px;
  border-radius: 8px;
  background-color: #fff;
  padding: 10px 10px 5px 10px;
  border-bottom: 1px solid #d9d9d9;
  box-shadow: 1px 2px 8px 2px #d7cfcf;
}
</style>
