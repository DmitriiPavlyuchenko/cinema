<template>
  <div :class="$style.tab">
    <div :class="$style['tab-wrapper']">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="$style[('tab-button', active ? currentTab === tab : '')]"
        @click="currentTab = tab"
      ></button>
    </div>
    <component :is="currentTab" :class="$style['tab-content']"></component>
  </div>
</template>

<script>
export default {
  name: "TabBase",
  props: {
    tabs: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" module>
.tab {
}

.tab-wrapper {
}

.tab-button {
}

.tab-content {
}
</style>
