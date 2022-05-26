<template>
  <div class="landing-page">
    <Header />

    <div class="caption">
      <div class="caption__text">
        <h1>The right way to get a car</h1>
        <h6>Monza Motorsports is a boutique-style dealership specializing in premium imports. We offer an advanced online vehicle purchasing experience with integrated financing and contactless home delivery.</h6>
        <h6>
          All of our cars come with a 5 day/500 kilometres no-hassle exchange option. Since 2012 Monza Motorsports<br />
          has been the benchmark for innovation in the automotive industry.
        </h6>
        <b-button class="caption__button" variant="outline-secondary" href="#cars">Browse cars</b-button>
      </div>
    </div>

    <main class="content">
      <h1 class="content__header">CURRENT OFFERS</h1>

      <div class="content__filters"></div>
      <div id="cars" class="content__cars">
        <CarItem />
      </div>
    </main>
  </div>
</template>

<script>
import Header from "./HeaderContent.vue";
import CarItem from "./CarItem.vue";
export default {
  name: "LandingPage",
  components: {
    Header,
    CarItem,
  },
};
</script>

<style lang="scss" scoped>
.landing-page {
  width: 100%;
  height: 100%;

  .caption {
    background: url("../assets/images/art01.png") center/cover;
    width: 100%;
    height: 688px;
    display: flex;
    align-items: center;

    .caption__text {
      width: 50%;
      height: 43.5%;
      display: flex;
      flex-wrap: wrap;
      margin-left: 7%;

      h1 {
        font-size: 50px;
        font-weight: 700;
      }

      h6 {
        width: 40%;

        font-size: 15px;
        line-height: 20px;
        font-weight: 400;
        margin: 4% 3.6% 9.8% 0;
      }

      .caption__button {
        width: 296px;
        height: 56px;

        font-size: 20px;
        font-weight: 500;
        color: var(--primary-200);
        border: 2px solid var(--primary-200);
        border-radius: 15px;
        padding-top: 10px;

        transition: all 0.5s;

        &:hover {
          color: var(--primary-100);
          background: var(--primary-200);
        }
      }
    }
  }

  .content {
    width: 100%;
    padding: 0 6.2%;

    .content__header {
      text-align: center;
      margin-top: 7.8%;

      font: 700 50px/75px Poppins;
      color: var(--secondary-100);
    }

    .content__filters {
      height: 100px;
      margin-top: 6%;
      background: black;
    }
  }
}
</style>
