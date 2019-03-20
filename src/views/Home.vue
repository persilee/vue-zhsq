<template>
  <div class="home">
    <v-header></v-header>
    <div class="content">
      <el-container>
        <aside-left></aside-left>
        <el-main>
          <transition name="move" mode="out-in">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </transition>
        </el-main>
        <aside-right></aside-right>
      </el-container>
    </div>
  </div>
</template>

<script>
import vHeader from '../components/Header';
import asideLeft from '../components/AsideLeft';
import asideRight from '../components/AsideRight';
import '../assets/js/count.js';

export default {
  name: "home",
  components: {
    vHeader,
    asideLeft,
    asideRight
  },
  data: function() {
    return {
    };
  }
};
</script>
<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
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
}
</style>
