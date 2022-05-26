<template>
  <div align-v="center" class="header d-flex">
    <div class="header__logo">
      <img src="../assets/images/logo.svg" alt="Logo" />
    </div>
    <b-nav class="header__nav">
      <b-nav-item class="header__nav-item">Inventory</b-nav-item>
      <b-nav-item class="header__nav-item">Financing </b-nav-item>
      <b-nav-item class="header__nav-item">Contacts </b-nav-item>
      <b-nav-item class="header__nav-item item-icon"><img src="../assets/images/facebook.svg" alt="Fb icon" /></b-nav-item>
      <b-nav-item class="header__nav-item item-icon"><img src="../assets/images/instagram.svg" alt="Inst icon" /></b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 72px;
  align-items: center;
  justify-content: space-evenly;
  padding: 0px 95px 0 100px;
  position: absolute;

  .header__logo {
    width: 50%;
    img {
      width: 139px;
      height: 35px;
    }
  }

  .header__nav {
    width: 50%;
    justify-content: end;

    .header__nav-item {
      margin-right: 7px;
    }

    .header__nav-item a {
      position: relative;
      font: 500 15px/20px NotoSans;
      color: var(--primary-200);

      &::before {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 1px;
        bottom: 0;
        left: 0;
        background: var(--primary-200);
        transform: scaleX(0);
        opacity: 0.7;
        transition: transform 0.3s ease;
      }

      &:hover::before {
        transform: scaleX(0.8);
      }
    }

    .item-icon {
      width: 38px;
    }
  }
}
</style>
