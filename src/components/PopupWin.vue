<template>
  <el-dialog
    title="title"
    :visible.sync="visible"
    @close="$emit('update:show', false)"
    :show="show"
  >
    <span>this is a dialog</span>
  </el-dialog>
</template>

<script>
export default {
  name: "popupWin",
  data() {
    return {
      visible: this.show
    };
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    show() {
      this.visible = this.show;
    }
  },
  methods: {
    winVisble() {
      this.$emit("winVisble");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
