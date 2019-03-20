<template>
  <el-aside width="25.6%">
    <div class="aside-left">
      <popup-win :show.sync="show"></popup-win>
      <div class="total-box" @click="open">
        <div class="title">实有人口</div>
        <div class="count syrk"></div>
      </div>
      <div class="total-box">
        <div class="title">实有车辆</div>
        <div class="count sycl">{{ counts.count_sycl }}</div>
      </div>
      <div class="total-box">
        <div class="title">实有房屋</div>
        <div class="count syfw">{{ counts.count_syfw }}</div>
      </div>
      <div class="total-box">
        <div class="title">实有单位</div>
        <div class="count sydw">{{ counts.count_sydw }}</div>
      </div>
      <div class="menu-box">
        <ul>
          <li class="menu-item-zhxf"></li>
          <li class="menu-item-zkxx"></li>
          <li class="menu-item-fkxx"></li>
          <li class="menu-item-zhab"></li>
          <li class="menu-item-sqfw"></li>
        </ul>
      </div>
    </div>
  </el-aside>
</template>

<script>
import popupWin from "./PopupWin";

export default {
  data: function() {
    return {
      show: false,
      counts: {
        count_syrk: 666,
        count_sycl: 365,
        count_syfw: 163,
        count_sydw: 66
      }
    };
  },
  components: {
    popupWin
  },
  methods: {
    open() {
      this.show = true;
    }
  },
  mounted() {
    $(".total-box .count.syrk").numberRock({
      speed: 20,
      count: this.counts.count_syrk
    });
    $(".total-box .count.sycl").numberRock({
      speed: 10,
      count: this.counts.count_sycl
    });
    $(".total-box .count.syfw").numberRock({
      speed: 10,
      count: this.counts.count_syfw
    });
    $(".total-box .count.sydw").numberRock({
      speed: 10,
      count: this.counts.count_sydw
    });
  }
};
</script>

<style scoped lang="scss">
.aside-left {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .total-box {
    margin-bottom: 2.2%;
    background: url(../assets/images/total-bg.png) no-repeat;
    background-size: 100% 100%;
    padding: 4.6% 10.6%;
    width: 66.6%;
    height: 4.6%;
    color: #acbaeb;
    font-weight: bold;
    display: flex;
    cursor: pointer;
    .title {
      flex-grow: 1;
    }
    .count {
      font-family: Digital-7 Mono;
      font-size: 0.56rem;
      background: linear-gradient(to bottom, #fffb00, #ff7200);
      background-clip: text;
      color: transparent;
      align-self: flex-end;
    }
  }
  .menu-box {
    background: url(../assets/images/menu-bg.png) no-repeat;
    background-size: 100% 100%;
    width: 76%;
    height: 46%;
    padding: 0% 5% 5% 5%;
    margin-top: 2%;
    padding-top: 0.16rem;
    ul {
      width: 80%;
      height: 100%;
      padding-left: 10%;
    }
    li {
      height: 14%;
      margin: 6% 0;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: 50% 50%;
    }
    .menu-item-zhxf {
      background-image: url(../assets/images/more-platform-zhxf.png);
    }
    .menu-item-zkxx {
      background-image: url(../assets/images/more-platform-zkxx.png);
    }
    .menu-item-fkxx {
      background-image: url(../assets/images/more-platform-fkxx.png);
    }
    .menu-item-zhab {
      background-image: url(../assets/images/more-platform-zhab.png);
    }
    .menu-item-sqfw {
      background-image: url(../assets/images/more-platform-sqfw.png);
    }
  }
}
</style>