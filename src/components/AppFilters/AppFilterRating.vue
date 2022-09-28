<template>
  <AppFilterToggle @isFilterOpen="setValue">
    <template #button-title> Рейтинг </template>
  </AppFilterToggle>
  <div v-show="isFilterOpen" :class="$style['filter-track-wrapper']">
    <div :class="$style['filter-value-wrapper']">
      <label :class="$style['filter-label']" for="">
        <span :class="$style['filter-title']">От</span>
        <InputBase
          v-model.number="minPrice"
          :class="$style['filter-value']"
          max="10"
          min="0"
          type="number"
        ></InputBase>
      </label>
      <label :class="$style['filter-label']" for="">
        <span :class="$style['filter-title']">До</span>
        <InputBase
          v-model.number="maxPrice"
          :class="$style['filter-value']"
          max="10"
          min="0"
          type="number"
        ></InputBase>
      </label>
    </div>
    <div :class="$style['filter-track']">
      <InputBase
        v-model.number="minPrice"
        max="10"
        min="0"
        step="1"
        type="range"
        @change="setRangeSlider"
      ></InputBase>
      <InputBase
        v-model.number="maxPrice"
        max="10"
        min="0"
        step="1"
        type="range"
        @change="setRangeSlider"
      ></InputBase>
    </div>
  </div>
  <span>{{ minPrice }}</span>
  <span>{{ maxPrice }}</span>
</template>

<script>
import AppFilterToggle from "@/components/AppFilters/AppFilterToggle";

export default {
  name: "AppFilterRating",
  components: { AppFilterToggle },
  data() {
    return {
      isFilterOpen: null,
      minPrice: 0,
      maxPrice: 10,
    };
  },
  watch: {
    minPrice(newValue, oldValue) {
      console.log(newValue, oldValue);
      if (this.minPrice > this.maxPrice) {
        this.minPrice = this.maxPrice;
      }
      if (this.minPrice > 10) {
        this.minPrice = 10;
      }
    },
  },
  computed: {
    toggleFilter() {
      return this.isFilterOpen;
    },
  },
  methods: {
    setRangeSlider() {
      if (this.minPrice > this.maxPrice) {
        const tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }
    },
    setValue(value) {
      this.isFilterOpen = value;
    },
  },
};
</script>

<style lang="scss" module>
.filter-label {
  display: inline-flex;
  width: 50%;
  flex-direction: column;
  gap: 0.8rem;
  align-items: flex-start;
}

.filter-value {
  padding: 0.5rem;
}

.filter-title {
  display: block;
}

.filter-value-wrapper {
  display: flex;
  gap: 1.5rem;
  width: 100%;
}

.filter-track-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

.filter-track {
  position: relative;
  width: 200px;
  height: 35px;
  text-align: center;
}

input[type="range"] {
  pointer-events: none;
  position: absolute;
  overflow: hidden;
  left: 0;
  top: 15px;
  width: 200px;
  outline: none;
  height: 18px;
  margin: 0;
  padding: 0;
  cursor: grab;
}

input::-webkit-slider-thumb {
  pointer-events: all;
  position: relative;
  z-index: 10;
  outline: 0;
  background: $purple;
}

input::-moz-range-thumb {
  pointer-events: all;
  position: relative;
  z-index: 10;
  -moz-appearance: none;
  width: 9px;
  background: $purple;
}

input::-moz-range-track {
  position: relative;
  z-index: -1;
  background-color: $purple;
  border: 0;
}

input:last-of-type::-moz-range-track {
  -moz-appearance: none;
  border: 0;
}

input[type="range"]::-moz-focus-outer {
  border: 0;
}
</style>
