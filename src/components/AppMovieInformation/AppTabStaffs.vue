<template>
  <span :class="$style['actor-block-title']"
    >Актеры
    <span :class="$style['actor-number']">{{ numbersActors }}</span></span
  >
  <ul :class="$style.actors">
    <li v-for="actor in staff" :key="actor" :class="$style['actor-card']">
      <div :class="$style['image-wrapper']">
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
export default {
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
};
</script>

<style lang="scss" module>
.actors {
  display: flex;
  padding-top: 1rem;
  gap: 1.5rem;
}

.actor-card {
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  gap: 0.5rem;
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

.image-wrapper {
  width: 10rem;
}
</style>
