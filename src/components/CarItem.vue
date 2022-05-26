<template>
  <div class="car-items">
    <div class="car-item" data-aos="fade-up" v-for="(car, i) in cars" :key="i">
      <b-card img-src="https://api.lorem.space/image/car?h=200" img-alt="Image" img-top tag="article" style="max-width: 20rem" class="card mb-2">
        <b-card-text class="card-year"> {{ car.year }} </b-card-text>
        <b-card-text class="card-model"> {{ car.make }} {{ car.model }}</b-card-text>
        <b-card-text class="card-price">${{ car.price }}</b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    numberOfVehicles: {
      type: Number,
      default: 52,
    },
  },
  data() {
    return {
      api: "https://private-anon-affe6bba04-carsapi1.apiary-mock.com/cars",
      cars: [],
    };
  },
  watch: {
    numberOfVehicles: {
      handler() {
        this.cars.length = this.numberOfVehicles;
      },
    },
  },
  mounted() {
    this.axios
      .get(this.api)
      .then((response) => {
        if (response.data) this.cars = response.data;
        this.cars.length = this.numberOfVehicles;
      })
      .catch(function (error) {
        console.error(error);
      });
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.car-items {
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  .car-item {
    width: 295px;
    height: 366px;
    margin: 0.9% 0.8% 0.7% 0.8%;
    box-shadow: 0px 0px 18px 0px #44444417;

    &:hover {
      .card-img-top {
        filter: contrast(1.25);
      }

      .card-model::before {
        transform: scaleX(2) !important;
      }
    }

    .card {
      border: none;

      img {
        height: 200px;
        border-radius: 0;
        transition: 0.2s;
      }

      .card-body {
        display: flex;
        padding: 1.3rem 1.3rem;
        flex-wrap: wrap;

        .card-year {
          font: 400 17px Poppins;
          color: var(--secondary-200);
        }

        .card-model {
          font: 400 17px NotoSans;
          color: var(--primary-100);
          width: auto;
          max-width: 80%;
          margin-left: 4%;
          position: relative;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: pre;

          &:first-letter {
            text-transform: uppercase;
          }

          &::before {
            content: "";
            position: absolute;
            display: block;
            width: 100%;
            height: 1px;
            bottom: 0;
            left: 0;
            background: var(--primary-100);
            transform: scaleX(0);
            transition: transform 0.5s ease;
          }
        }

        .card-price {
          margin-top: 16%;
          width: 100%;

          font: 500 20px NotoSans;
          color: var(--primary-100);
        }
      }
    }
  }
}
</style>
