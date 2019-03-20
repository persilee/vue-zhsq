<template>
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
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.aside-right {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
}
</style>