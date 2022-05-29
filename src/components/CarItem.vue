<template>
  <b-container class="car__items">
    <b-row class="car__row">
      <b-col cols="12" sm="4" class="car__item" data-aos="fade-up" v-for="(car, i) in paginatedItems" :key="i">
        <b-card img-src="https://api.lorem.space/image/car?h=200" img-alt="Image" img-top tag="article" style="max-width: 20rem" class="car__card mb-2">
          <b-card-text class="car__year"> {{ car.year }} </b-card-text>
          <b-card-text class="car__model"> {{ car.make }} {{ car.model }}</b-card-text>
          <b-card-text class="car__price">${{ car.price }}</b-card-text>
        </b-card>
      </b-col>
    </b-row>

    <b-row data-aos="fade-up" class="car__pagination">
      <b-col md="6" class="my-1">
        <b-pagination @change="onPageChanged" :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: {
    arrayOfCars: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      items: this.arrayOfCars,
      paginatedItems: this.arrayOfCars,
      currentPage: 1,
      perPage: 22,
      totalRows: this.arrayOfCars.length,
    };
  },
  computed: {},
  methods: {
    paginate(page_size, page_number) {
      let itemsToParse = this.items;
      this.paginatedItems = itemsToParse.slice(page_number * page_size, (page_number + 1) * page_size);
    },
    onPageChanged(page) {
      this.paginate(this.perPage, page - 1);
    },
  },
  mounted() {
    this.paginate(this.perPage, 0);
  },
  watch: {
    arrayOfCars: {
      handler() {
        this.items = this.arrayOfCars;
        this.paginatedItems = this.arrayOfCars;
        this.totalRows = this.arrayOfCars.length;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.car__items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: 100%;
  min-height: 300px;

  .car__row {
    min-height: 300px;
    margin-top: 4.5%;
    width: 88.6%;
  }

  .car__item {
    width: 295px;
    height: 366px;
    margin: 0 0% 1.5% 1.5%;
    box-shadow: 0px 0px 18px 0px #44444417;
    padding: 0;

    &:hover {
      .card-img-top {
        filter: contrast(1.25);
      }

      .car__model::before {
        transform: scaleX(2) !important;
      }
    }

    .car__card {
      border: none;

      img {
        height: 200px;
        border-radius: 0;
        transition: 0.2s;
      }

      .card-body {
        display: flex;
        flex-wrap: wrap;

        padding: 1.3rem 1.3rem;

        .car__year {
          font: 400 17px Poppins;
          color: var(--secondary-200);
        }

        .car__model {
          font: 400 17px NotoSans;
          color: var(--primary-100);
          width: auto;
          position: relative;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: pre;

          max-width: 80%;
          margin-left: 2%;

          &:first-letter {
            text-transform: uppercase;
          }

          &::before {
            content: "";
            position: absolute;
            display: block;
            background: var(--primary-100);
            transform: scaleX(0);
            transition: transform 0.5s ease;

            width: 100%;
            height: 1px;
            bottom: 0;
            left: 0;
          }
        }

        .car__price {
          margin-top: 16%;
          width: 100%;

          font: 500 20px NotoSans;
          color: var(--primary-100);
        }
      }
    }
  }

  .car__pagination {
    width: 100%;
    justify-content: center;

    ul {
      justify-content: center;
      font: 500 12px NotoSans;
    }
  }
}
</style>
