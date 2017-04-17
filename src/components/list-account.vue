<template lang="html">
  <div class="particulars">
    <div class="field-box" :style="{width: width + 'px'}">
      <slot name='names'></slot>
    </div>
    <div class="field-val">
      <slot name='val'></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      default: '60'
    }
  }
}
</script>

<style lang="css" scoped>
.field-box {
  padding: 6px 0 0 0;
  text-align:justify;
  text-justify:distribute-all-lines;/*ie6-8*/
  text-align-last:justify;          /* ie9*/
  -moz-text-align-last:justify;     /*ff*/
  -webkit-text-align-last:justify;  /*chrome 20+*/
}
.field-box span {
  display: block;
  line-height:11px;
}
/* chrome*/
@media screen and (-webkit-min-device-pixel-ratio:0){
  .field-box span:after{
    content:" ";
    height:0;
    width:100%;
    overflow:hidden;
    display: inline-block;
  }
}
.particulars {
  display: flex;
}
.field-val {
  margin-left: 8px;
  line-height: 23px;
}
</style>
