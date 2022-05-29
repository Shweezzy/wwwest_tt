<template>
  <b-container align-v="center" class="header d-flex">
    <b-container class="header__logo">
      <img src="../assets/images/logo.svg" alt="Logo" />
    </b-container>
    <b-container>
      <b-nav class="header__nav">
        <b-nav-item class="header__nav-item">Inventory</b-nav-item>
        <b-nav-item class="header__nav-item">Financing </b-nav-item>
        <b-nav-item class="header__nav-item">Contacts </b-nav-item>
        <b-nav-item class="header__nav-item item-icon"><img src="../assets/images/facebook.svg" alt="Fb icon" /></b-nav-item>
        <b-nav-item class="header__nav-item item-icon"><img src="../assets/images/instagram.svg" alt="Inst icon" /></b-nav-item>
      </b-nav>
    </b-container>
  </b-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  align-items: center;
  justify-content: space-evenly;
  position: absolute;

  height: 72px;

  .header__logo {
    padding-left: 6.2%;

    img {
      width: 139px;
      height: 35px;

      margin-left: 14%;
    }
  }

  .header__nav {
    justify-content: end;

    margin-right: 13.1%;

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

      & a::before {
        content: none;
      }
    }
  }
}
</style>
