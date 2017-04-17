<template lang="html">
  <div class="hello">
    <transition-group class="list-content" name="flip-list" tag="ul">
      <router-link tag='li' :to="{name:'storeList',params: {id:item.SERVERPART_ID}}" v-for="item in list" :key="item">
        <list-account>
          <span slot='names'>服务区:</span>
          <span slot='names'>地址:</span>
          <p slot='val'>{{ item.SERVERPART_NAME }}</p>
          <p slot='val'>{{ item.SERVERPART_ADDRESS }}</p>
        </list-account>
      </router-link>
    </transition-group>
  </div>
</template>

<script>
import mixins from '../assets/mixin'
import listAccount from './list-account.vue'
export default {
  data () {
    return {
      list: []
    }
  },
  mixins: [mixins],
  components: {
    listAccount
  },
  watch: {
    value: function (e) {
      if(!(e.match(/^[ ]*$/))){
        this.items = _.shuffle(this.items);
        this.list.forEach((elem, index, arr) => {
          if (elem.SERVERPART_NAME.search(e.trim()) !== -1) {
            this.list.splice(index,1)
            this.list.unshift(elem)
          }
        })
      }
    }
  },
  mounted() {
    this.loadMore()
  },
  methods: {
    loadMore() {
      Bus.$emit('loading', true)
      this.$remote.get(`?action_type=getTotalServerPart`).then(
        response => {
          setTimeout(() => {
            Bus.$emit('loading', false)
          }, 1000)
          if(response.status === 200) {
            this.list = response.data.SERVERPARTObject
          }
        }
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
