<template lang="html">
  <div>
    <transition-group class="list-content" name="flip-list" tag="ul">
      <li v-for="item in list" :key="item">
        <div class="title-account"><span>{{ item.SERVERPART_NAME }}</span><span>{{ item.SHOPNAME }}门店</span></div>
        <div class="particulars">
          <div class="field-box">
            <span>客单数量:</span>
            <span>销售数量:</span>
            <span>销售金额:</span>
            <span>客单均价:</span>
            <span>长短款:</span>
            <span>移动支付金额:</span>
            <span>结账时间:</span>
          </div>
          <div class="field-val">
            <p> {{ item.TICKETCOUNT }}</p>
            <p> {{ item.TOTALCOUNT }}</p>
            <p> {{ item.TOTALSELLAMOUNT }}</p>
            <p> {{ Math.ceil(item.TOTALSELLAMOUNT/item.TOTALCOUNT) }}</p>
            <p> {{ item.CASHPAY }}</p>
            <p class='payment'> {{ item.MOBILEPAYMENT }}</p>
            <p> {{ item.ENDACCOUNT_DATE }}</p>
          </div>
        </div>
      </li>
    </transition-group>
    <mt-datetime-picker
      v-model="pickerVisible"
      ref="picker"
      type="date"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleConfirm">
    </mt-datetime-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      value: '',
      ID: null,
      pickerVisible: null,
      formattingDatas: null
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.ID = this.$route.params.id
      this.getDatas();
    })
  },
  props:['openPickers'],
  watch: {
    formattingDatas(e) {
      this.list.forEach((elem, index, arr) => {
        if (elem.ENDACCOUNT_DATE.search(e) !== -1) {
          this.list.splice(index,1)
          this.list.unshift(elem)
        }
      })
    },
    openPickers(e) {
      this.openPicker()
    }
  },
  computed: {
    showNav() {
      return this.$route.meta.requiresAuth
    }
  },
  methods: {
    openPicker() {
      document.body.style.overflow = 'hidden'
      this.$refs.picker.open();
    },
    handleConfirm(dateVal) {
      var da = Date.parse(dateVal)
      var dates = new Date(da);
      var year = dates.getFullYear();
      var month = dates.getMonth()+1;
      var date = dates.getDate();
      this.formattingDatas = [year, month, date].join('/')
      this.value = this.formattingDatas
    },
    getDatas () {
      Bus.$emit('loading', true)
      this.$remote.get(`?action_type=getServerPartEndaccount&action_data=${this.ID}`).then( response => {
        setTimeout(() => {
          Bus.$emit('loading', false)
        }, 1000)
        if(response.status === 200) {
          this.list = response.data.EndaccountObject
        }
      })
    }
  }
}
</script>

<style lang="css" scoped>
.list-content {
  margin-top: 50px;
}
.list-content li{
  color: #333;
  margin: 15px;
  padding: 10px 10px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 1px 2px 8px 2px #d7cfcf;
}
.field-box {
  width: 108px;
  padding: 6px 0 0 0;
  text-align:justify;
  text-align-last:justify;/* ie9*/
  -moz-text-align-last:justify;/*ff*/
  -webkit-text-align-last:justify;/*chrome 20+*/
  text-justify:distribute-all-lines;/*ie6-8*/
}
.field-box span {
  color: #6f6f6f;
  display: block;
  line-height:11px;
  font-size: 14px;
  /*text-align: right;*/
}
@media screen and (-webkit-min-device-pixel-ratio:0){/* chrome*/
  .field-box span:after{
    content:" ";
    height:0;
    width:100%;
    overflow:hidden;
    display: inline-block;
  }
}
.title-account {
  overflow: hidden;
  padding-bottom: 8px;
  margin-bottom: 8px;
  border-bottom: 1px solid #e6e6e6;
}
.title-account span:first-child {
  float: left;
  color: #727272;
}
.title-account span:last-child {
  float: right;
  color: #fc5756;
}
.payment {
  color: #fc5756;
}
.particulars {
  display: flex;
  overflow: hidden;
}
.field-val {
  font-size: 14px;
  margin-left: 8px;
  line-height: 22px;
}
</style>
