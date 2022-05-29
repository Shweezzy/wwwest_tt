<template>
  <b-container class="offers">
    <b-container class="offers__filters">
      <b-form-select data-aos="fade-up" v-model="year" :options="yearOptions" value-field="value" text-field="value"></b-form-select>
      <b-form-select data-aos="fade-up" data-aos-delay="100" v-model="make" :options="makeOptions" value-field="value" text-field="value"></b-form-select>
      <b-form-select data-aos="fade-up" data-aos-delay="200" v-model="model" :options="modelOptions" value-field="value" text-field="value"></b-form-select>
      <b-form-select data-aos="fade-up" data-aos-delay="300" v-model="trim" :options="trimOptions" value-field="value" text-field="value"></b-form-select>
      <b-form-select data-aos="fade-up" data-aos-delay="400" v-model="mileage" :options="mileageOptions" value-field="value" text-field="value"></b-form-select>
      <b-button id="selectCarsCount" data-aos="fade-up" data-aos-delay="500">40 cars</b-button>
    </b-container>
    <template v-if="!isCarsLoaded">
      <b-container class="loaders">
        <b-spinner small variant="black" type="grow"></b-spinner>
        <b-spinner small variant="primary" type="grow"></b-spinner>
        <b-spinner small type="grow"></b-spinner>
      </b-container>
    </template>

    <template v-if="isCarsLoaded">
      <CarItem ref="carItems" :arrayOfCars="filteredArray || cars" />

      <template v-if="!filteredArray.length">
        <p class="no-cars">doesn't match...</p>
      </template>
    </template>
  </b-container>
</template>

<script>
import CarItem from "./CarItem.vue";

export default {
  components: {
    CarItem,
  },
  data() {
    return {
      api: "https://private-anon-affe6bba04-carsapi1.apiary-mock.com/cars",
      cars: [],
      filteredArray: null,
      year: "Year",
      make: "Make",

      model: "Model",
      trim: "Trim",
      mileage: "Mileage",

      yearOptions: [{ value: "Year" }, { value: 2017 }, { value: 2016 }, { value: 2015 }],
      makeOptions: [{ value: "Make" }, { value: "Honda" }, { value: "Kia" }, { value: "Toyota" }, { value: "Volkswagen" }],
      modelOptions: [{ value: "Model" }],
      trimOptions: [{ value: "Trim" }],
      mileageOptions: [{ value: "Mileage" }],

      isCarsLoaded: false,
    };
  },
  watch: {
    year: {
      handler() {
        this.filteringArray();
      },
    },
    make: {
      handler() {
        this.filteringArray();
      },
    },
  },
  computed: {
    filteredByYears() {
      return this.cars.filter((e) => {
        return e.year === this.year;
      });
    },
    filteredByMake() {
      return this.cars.filter((e) => {
        return e.make === this.make.toLowerCase();
      });
    },
    concatFiltered() {
      return this.cars.filter((e) => {
        return e.year === this.year && e.make === this.make.toLowerCase();
      });
    },
  },
  methods: {
    filteringArray() {
      if (this.make !== "Make" && Number.isInteger(this.year)) {
        return (this.filteredArray = this.concatFiltered);
      }

      if (Number.isInteger(this.year)) {
        return (this.filteredArray = this.filteredByYears);
      }

      if (this.make !== "Make") {
        return (this.filteredArray = this.filteredByMake);
      }

      this.pullingCars();
    },
    pullingCars() {
      this.isCarsLoaded = false;
      this.axios
        .get(this.api)
        .then((response) => {
          this.cars = response.data;
          this.filteredArray = this.cars;
          this.isCarsLoaded = true;
        })
        .catch((error) => console.error(error));
    },
  },
  mounted() {
    this.pullingCars();
  },
};
</script>

<style lang="scss" scoped>
.offers {
  display: flex;
  flex-wrap: wrap;

  // FILTERS
  .offers__filters {
    width: 100%;
    display: flex;
    margin-top: 4.7%;
    justify-content: center;

    select {
      height: 47px;
      width: 171px;
      margin-right: 1.3%;
      border-radius: 15px;
      padding: 0 0.7%;
    }

    #selectCarsCount {
      background: var(--primary-300);
      margin: 0;
      width: 290px;
      color: var(--primary-200);
      text-align: center;
      border: 2px solid var(--primary-300);
      border-radius: 15px;

      &:hover {
        color: var(--primary-100);
        background: #fff;
      }
    }
  }

  .loaders {
    width: 100%;
    text-align: center;
  }

  .no-cars {
    font: 700 50px/75px Poppins;
    color: var(--secondary-100);
    position: absolute;
    margin-left: 33%;
    margin-top: 12%;
  }
}
</style>
