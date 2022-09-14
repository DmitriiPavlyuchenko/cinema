<template>
  <div :class="$style['filter-rating']" @click="openFilter">
    <ButtonBase :class="$style['open-filter']">Рейтинг</ButtonBase>
    <IconBase
      :class="$style['arrow-down']"
      height="14"
      icon-name="arrow-down"
      width="14"
    >
      <IconArrowDown />
    </IconBase>
  </div>
  <div v-show="isFiltersOpen" :class="$style['filter-track-wrapper']">
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
import IconArrowDown from "@/components/icons/IconArrowDown.vue";

export default {
  name: "AppFilterRating",
  components: { IconArrowDown },
  data() {
    return {
      isFiltersOpen: true,
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
  methods: {
    openFilter() {
      this.isFiltersOpen
        ? (this.isFiltersOpen = false)
        : (this.isFiltersOpen = true);
    },
    setRangeSlider() {
      if (this.minPrice > this.maxPrice) {
        const tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }
    },
  },
};
</script>

<style lang="scss" module>
.filter-rating {
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
}

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
}

.filter-track-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
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

.arrow-down {
  transform: rotate(180deg);
}
</style>

<style lang="scss"></style>
