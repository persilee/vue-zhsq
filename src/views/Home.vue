<template>
  <div class="home">
    <div class="header"></div>
    <div class="content">
      <el-container>
        <el-aside width="23%">
          <div class="aside-left">
            <div class="total-box">实有人口</div>
            <div class="total-box">实有车辆</div>
            <div class="total-box">实有房屋</div>
            <div class="total-box">实有单位</div>
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
        <el-main></el-main>
        <el-aside width="23%">
          <div class="aside-right"></div>
        </el-aside>
      </el-container>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {}
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
    margin-top: -8%;
    position: relative;
    width: 100%;
    height: 110%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    .total-box {
      margin-bottom: 2.2%;
      background: url(../assets/images/total-bg.png) no-repeat;
      background-size: 100% 100%;
      padding: 3.3% 9.3%;
      width: 72%;
      height: 5.5%;
      color: #acbaeb;
      font-weight: bold;
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
        width: 79%;
        height: 100%;
        padding-left: 8%;
      }
      li {
        width: 3rem;
        height: 0.74rem;
        margin: 8% 0;
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
}
</style>
