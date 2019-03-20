<template>
  <div class="home">
    <div class="header">
      <ul class="header-nav">
        <li>
          <a href="#">
            <i class="iconfont icon-artboard9"></i> 警务快搜
          </a>
        </li>
        <li>
          <a href="#">
            <i class="iconfont icon-user-name"></i> admin
          </a>
        </li>
        <li>
          <router-link to="/login">
            <i class="iconfont icon-zhuxiao"></i> 注销
          </router-link>
        </li>
        <li>
          <a href="#">
            <i class="iconfont icon-system"></i> 系统管理
          </a>
        </li>
      </ul>
    </div>
    <div class="content">
      <el-container>
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
        <el-main>
          <transition name="move" mode="out-in">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </transition>
        </el-main>
        <el-aside width="23%">
          <div class="aside-right">
            <div class="dimension-box">
              <div class="dimension-item fx1"></div>
              <div class="dimension-item fx2"></div>
              <div class="dimension-item fx3"></div>
              <div class="dimension-item fx4"></div>
            </div>
            <div class="equipment-box">
              <div class="equipment-item rlsb">
                <div class="rotating"></div>
              </div>
              <div class="equipment-item cldz">
                <div class="rotating"></div>
              </div>
              <div class="equipment-item sjrd">
                <div class="rotating"></div>
              </div>
              <div class="equipment-item mjsb">
                <div class="rotating"></div>
              </div>
              <div class="equipment-item jksb">
                <div class="rotating"></div>
              </div>
            </div>
          </div>
        </el-aside>
      </el-container>
    </div>
  </div>
</template>

<script>
import "../assets/js/count.js";
import popupWin from "../components/PopupWin";

export default {
  name: "home",
  components: {
    popupWin
  },
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
.home {
  width: 100%;
  height: 100%;
  .header {
    background: url(../assets/images/header-bg.png) no-repeat;
    height: 15%;
    background-size: 100% 100%;
    .header-nav {
      position: absolute;
      z-index: 5;
      top: 0.12rem;
      right: 0.24rem;
      li {
        line-height: 0.25rem;
        font-size: 0.14rem;
        color: #fff;
        float: left;
        margin-left: 9px;
        background: #0270bd;
        padding: 0 4px;
        border-radius: 2px;
        a {
          color: #fff;
          text-decoration: none;
          font-weight: bold;
          i {
            font-size: 0.14rem;
          }
        }
      }
    }
  }
  .content {
    background: url(../assets/images/cont-bg.png) no-repeat;
    height: 85%;
    background-size: 100% 100%;
    font-size: 0.18rem;
    color: #fff;
  }
  section {
    height: 100%;
    .el-aside {
      overflow: visible;
    }
  }
  .aside-left,
  .aside-right {
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
    .dimension-box {
      width: 100%;
      height: 36%;
      display: flex;
      flex-wrap: wrap;
      padding-right: 26px;
      .dimension-item {
        width: 46%;
        height: 46%;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        transform: scale(0.96);
        transition: 0.6s;
      }
      .fx1 {
        background-image: url(../assets/images/index2-fx1.png);
        &:hover {
          background-image: url(../assets/images/index2-fx1-h.png);
        }
      }
      .fx2 {
        background-image: url(../assets/images/index2-fx2.png);
        &:hover {
          background-image: url(../assets/images/index2-fx2-h.png);
        }
      }
      .fx3 {
        background-image: url(../assets/images/index2-fx3.png);
        &:hover {
          background-image: url(../assets/images/index2-fx3-h.png);
        }
      }
      .fx4 {
        background-image: url(../assets/images/index2-fx4.png);
        &:hover {
          background-image: url(../assets/images/index2-fx4-h.png);
        }
      }
    }
    .equipment-box {
      width: 100%;
      height: 53.8%;
      padding-left: 0.96rem;
      padding-top: 0.66rem;
      .equipment-item {
        width: 66%;
        height: 13%;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        margin-bottom: 6.6%;
        position: relative;
        transition: 0.4s;
        .rotating {
          width: 0.4rem;
          height: 0.4rem;
          position: absolute;
          background-image: url(../assets/images/index2-cont-right-down-zd.png);
          background-size: contain;
          background-repeat: no-repeat;
          background-position: 50% 50%;
          animation: myfirstimg1 1s infinite;
          transition: All 2s ease-in-out;
        }
      }
      .rlsb {
        background-image: url(../assets/images/i-index2-rlsb.png);
        &:hover {
          background-image: url(../assets/images/i-index2-rlsb-h.png);
        }
        .rotating {
          top: 44%;
          right: 3%;
        }
      }
      .cldz {
        background-image: url(../assets/images/i-index2-cldz.png);
        &:hover {
          background-image: url(../assets/images/i-index2-cldz-h.png);
        }
        .rotating {
          top: 44%;
          right: 3%;
        }
      }
      .sjrd {
        background-image: url(../assets/images/i-index2-sjrd.png);
        &:hover {
          background-image: url(../assets/images/i-index2-sjrd-h.png);
        }
        .rotating {
          top: 44%;
          right: 3%;
        }
      }
      .mjsb {
        background-image: url(../assets/images/i-index2-mjsb.png);
        &:hover {
          background-image: url(../assets/images/i-index2-mjsb-h.png);
        }
        .rotating {
          top: 44%;
          right: 3%;
        }
      }
      .jksb {
        background-image: url(../assets/images/i-index2-jksb.png);
        &:hover {
          background-image: url(../assets/images/i-index2-jksb-h.png);
        }
        .rotating {
          top: 44%;
          right: 3%;
        }
      }
    }
  }
}
@keyframes myfirstimg1 {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(36deg);
  }
  20% {
    transform: rotate(72deg);
  }
  30% {
    transform: rotate(108deg);
  }
  40% {
    transform: rotate(144deg);
  }
  50% {
    transform: rotate(180deg);
  }
  60% {
    transform: rotate(216deg);
  }
  70% {
    transform: rotate(252deg);
  }
  80% {
    transform: rotate(288deg);
  }
  90% {
    transform: rotate(324deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
