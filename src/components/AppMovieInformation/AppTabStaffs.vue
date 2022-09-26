<template>
  <span :class="$style['actor-block-title']"
    >Актеры
    <span :class="$style['actor-number']">{{ numbersActors }}</span></span
  >
  <ul :class="$style['actor-list']">
    <li
      v-for="(actor, index) in staff"
      :key="index"
      :class="$style['actor-card']"
    >
      <div>
        <img
          :alt="actor.nameRu"
          :class="$style['actor-image']"
          :src="actor.posterUrl"
        />
      </div>
      <span :class="$style['actor-name']">{{ actor.nameRu }}</span>
    </li>
  </ul>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppTabStaffs",
  props: {
    staff: {
      type: Array,
      required: true,
    },
  },
  computed: {
    numbersActors() {
      return "(" + this.staff.length + ")";
    },
  },
});
</script>

<style></style>

<style lang="scss" module>
.actor-list {
  padding-top: 1.5rem;
  display: flex;
  gap: 1.5rem;
}

.actor-card {
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  gap: 0.5rem;
  width: 12rem;
}

.actor-block-title {
  font-size: 1.3rem;
}

.actor-number {
  font-size: 1rem;
  color: $grey;
}

.actor-image {
  width: 100%;
  height: auto;
  border-radius: 0.3rem;
}
</style>
