<template>
  <div :class="$style['actors-wrapper']">
    <h4 :class="$style['actor-title']">В главных ролях</h4>
    <ul :class="$style['actor-list']">
      <li v-for="(actor, index) in tenStaff" :key="index" :class="$style.actor">
        {{ actor.nameRu }}
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppStaff",
  props: {
    staff: {
      type: Object,
      required: true,
    },
  },
  computed: {
    tenStaff() {
      const firstElement = 0;
      const lastElement = 10;
      return this.staff.slice(firstElement, lastElement);
    },
  },
});
</script>

<style lang="scss" module>
.actor-title {
  font-weight: 600;
  font-size: 1.2rem;
}

.actors-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.actor-list {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.actor {
  font-size: 0.7rem;
}
</style>
