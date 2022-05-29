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
        <b-button class="caption__button" variant="outline-secondary" href="#currentOffers">Browse cars</b-button>
      </div>
    </div>

    <main id="currentOffers" class="content">
      <h1 class="content__header">CURRENT OFFERS</h1>

      <div class="content__cars">
        <CurrentOffers />
      </div>
    </main>

    <article class="subscribe">
      <b-container class="subscribe__text">
        <h1>Haven't found a suitable vehicle?</h1>
        <h6>Sign up for our newsletter and be the first to know when we publish new vehicle offers.</h6>
      </b-container>

      <b-form class="subscribe__form">
        <b-form-group id="input-group-1" label-for="input-1">
          <b-form-input id="input-1" v-model="email" type="email" placeholder="Enter your email" required></b-form-input>
        </b-form-group>

        <b-button type="submit">Subscribe now</b-button>
      </b-form>
    </article>

    <div class="questions">
      <h1 class="questions__header">popular questions</h1>

      <vs-collapse>
        <vs-collapse-item disabled icon-arrow="add">
          <div slot="header">1. Scope</div>
        </vs-collapse-item>
        <vs-collapse-item disabled icon-arrow="add">
          <div slot="header">2. Vehicle characteristics</div>
        </vs-collapse-item>
        <vs-collapse-item icon-arrow="add">
          <div slot="header">3. Warranty / guarantee</div>
          3.1 The statutory warranty is completely excluded to the extent permitted by law.<br />

          3.2 If the vehicle still has a current factory warranty, a sales representative (brand representative) of the manufacturer shall provide the services owed therein. If there is a factory warranty, the beginning of the warranty for new
          vehicles or vehicles with a current manufacturer's warranty is not the date of the first placing on the market, but the beginning of the warranty in the manufacturer's system or the contractually agreed beginning of the warranty, if any.

          <br />
          3.3 If there is a special warranty insurance for the vehicle, this will take the place of the material warranty according to section 3.1 and replace it. In this case, the General Terms and Conditions of the respective warranty service
          provider apply.
        </vs-collapse-item>
        <vs-collapse-item disabled icon-arrow="add">
          <div slot="header">4. Trade-in vehicle</div>
        </vs-collapse-item>
        <vs-collapse-item disabled icon-arrow="add">
          <div slot="header">5. Home Delivery</div>
        </vs-collapse-item>
        <vs-collapse-item disabled icon-arrow="add">
          <div slot="header">6. Right of return</div>
        </vs-collapse-item>
        <vs-collapse-item disabled icon-arrow="add">
          <div slot="header">7. Written form</div>
        </vs-collapse-item>
        <vs-collapse-item disabled icon-arrow="add">
          <div slot="header">8. Applicable law and place of jurisdiction</div>
        </vs-collapse-item>
      </vs-collapse>
    </div>

    <footer class="footer">
      <div class="footer__block block-logo"><img src="../assets/images/logo.svg" alt="Logo" /></div>
      <div class="footer__block block-navs">
        <b-nav>
          <b-nav-item class="footer__nav-item">Inventory</b-nav-item>
          <b-nav-item class="footer__nav-item">Financing </b-nav-item>
          <b-nav-item class="footer__nav-item">Contacts </b-nav-item>
        </b-nav>
      </div>
      <div class="footer__block block-social">
        <b-nav-item class="footer__nav-item item-icon"><img src="../assets/images/facebook.svg" alt="Fb icon" /></b-nav-item>
        <b-nav-item class="footer__nav-item item-icon"><img src="../assets/images/instagram.svg" alt="Inst icon" /></b-nav-item>
      </div>
    </footer>
  </div>
</template>

<script>
import Header from "./HeaderContent.vue";
import CurrentOffers from "./CurrentOffers.vue";
export default {
  name: "LandingPage",
  components: {
    Header,
    CurrentOffers,
  },
  data() {
    return {
      email: "",
    };
  },
};
</script>

<style lang="scss">
.landing-page {
  width: 100%;
  height: 100%;

  br {
    display: block;
    margin: 8px 0;
    content: "";
  }
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
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .content__header {
      width: 100%;
      text-align: center;
      margin-top: 6.8%;

      font: 700 50px/75px Poppins;
      color: var(--secondary-100);
    }
  }

  .subscribe {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 180px;
    margin-top: 4.6%;

    background: var(--primary-100);

    .subscribe__text {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding: 2.4% 0 !important;
      width: 29.4%;

      h1 {
        font: 600 25px NotoSans;
      }

      h6 {
        font: 400 15px/20px NotoSans;
      }
    }

    .subscribe__form {
      width: 56.6%;
      display: flex;
      align-items: center;

      font: 400 15px NotoSans;

      .form-group {
        width: 62%;

        .form-control {
          height: 52px;
          border: 1px solid #bdbdbd;
          border-radius: 15px;
          background: transparent;
          padding-left: 3%;
          letter-spacing: -0.5px;
          color: var(--primary-200);

          &::placeholder {
            color: var(--primary-200);
          }
        }
      }

      .btn {
        width: 189px;
        height: 55px;
        margin-left: 2.5%;
        border-radius: 15px;
        color: var(--primary-100);
        background: var(--primary-200);
        letter-spacing: -0.5px;

        &:hover {
          color: var(--primary-100);
          background: var(--primary-200);
        }
      }
    }
  }

  .questions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    color: var(--primary-100);

    .questions__header {
      width: 100%;
      text-align: center;
      margin-top: 8.3%;

      font: 700 50px/75px Poppins;
      color: var(--secondary-100);
      text-transform: uppercase;
    }

    .vs-collapse {
      width: 57%;
      margin-top: 3.4%;
      padding: 0;

      .vs-collapse-item.open-item {
        display: contents;
        transition: 0.2s;

        .vs-collapse-item--content {
          width: 100%;
          height: 100%;
          max-height: 269px !important;
          box-shadow: 0px 0px 18px rgba(68, 68, 68, 0.09);
          position: relative;
          top: -46px;
        }

        .vs-collapse-item--header {
          z-index: 1;
          color: var(--primary-300);
          padding: 25px 0px 0 40px;
          font-weight: 700;
        }
      }
    }

    .vs-collapse-item {
      border-color: var(--secondary-400);
      height: 67px;

      font: 500 15px/20px NotoSans;

      .con-content--item {
        padding: 8.6% 5% 0 4.7%;
        font: 400 13px/20px NotoSans;
      }

      .vs-collapse-item--header {
        padding: 23px 0px 0 24px;

        .icon-header {
          right: 25px;
          top: 39px;

          .material-icons {
            font-size: 16px;
            font-weight: bold;
          }
        }
      }
    }
  }

  .footer {
    display: flex;
    justify-content: space-evenly;

    margin-top: 12.8%;
    height: 121px;
    background: var(--primary-100);

    .footer__block {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .block-logo {
      width: 208px;
      img {
        width: 191px;
        height: 48px;
      }
    }

    .block-navs {
      width: 726px;
      a {
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
    }

    .block-social {
      width: 218px;
      list-style: none;
      box-sizing: border-box;
      padding-left: 5.6%;

      li {
        width: 41px;
      }
    }
  }
}
</style>
