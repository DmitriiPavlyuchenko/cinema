<template>
  <AppFilterToggle @isFilterOpen="setValue">
    <template #button-title>Год выхода</template>
  </AppFilterToggle>
  <div v-show="toggleFilter" :class="$style['radio']">
    <label :class="$style['radio-wrapper']">
      <InputBase
        v-model="check"
        :class="$style['radio-check']"
        checked
        name="sort"
        type="radio"
        value="-1"
      />
      <span :class="$style['radio-switch']"></span>
      <span :class="$style.caption">Сначала новые</span>
    </label>
    <label :class="$style['radio-wrapper']">
      <InputBase
        v-model="check"
        :class="$style['radio-check']"
        name="sort"
        type="radio"
        value="1"
      />
      <span :class="$style['radio-switch']"></span>
      <span :class="$style.caption">Сначала старые</span>
    </label>
  </div>
</template>

<script>
import AppFilterToggle from "@/components/AppFilters/AppFilterToggle";
export default {
  name: "AppFilterYear",
  components: { AppFilterToggle },
  data() {
    return {
      check: "",
      isFilterOpen: null,
    };
  },
  computed: {
    toggleFilter() {
      return this.isFilterOpen;
    },
  },
  methods: {
    setValue(value) {
      this.isFilterOpen = value;
    },
  },
};
</script>

<style lang="scss" module>
.radio {
  display: flex;
  gap: 1rem;
  flex-direction: column;
}

.radio-wrapper {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  width: 100%;
  cursor: pointer;
  position: relative;
  outline: none;
  outline-offset: 0;
}

.radio-wrapper:focus {
  outline: none;
  outline-offset: 0;
}

.radio-check {
  appearance: none;
  border: none;
  border-radius: 0;
  outline: none;
  outline-offset: 0;
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: transparent;
  cursor: pointer;

  &:checked ~ .radio-switch::before {
    border-color: $text-color;
    background-color: $purple;
  }

  &:checked ~ .radio-switch::after {
    opacity: 1;
    visibility: visible;
  }

  &:checked {
    border: none;
  }

  &:active {
    border: none;
  }
}

.radio-switch {
  display: block;
  position: relative;
  margin-right: 0.45rem;
  width: 1rem;
  height: 1rem;
  outline: none;
  outline-offset: 0;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    border: 2px solid #e4e6ef;
    border-radius: 100%;
    width: 100%;
    height: 100%;
    transition: border 0.3s, background-color 0.3s;
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 100%;
    width: 11px;
    height: 11px;
    background-color: $purple;
    opacity: 0;
    visibility: hidden;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s, visibility 0.3s;
  }
}

.caption {
  position: relative;
  font-size: 0.7rem;
}
</style>
