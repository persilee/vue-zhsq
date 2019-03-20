<template>
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
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
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
</style>