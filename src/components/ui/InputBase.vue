<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "InputBase",
  props: {
    modelValue: {
      type: [String, Number],
      required: true,
    },
  },
  emits: ["update:modelValue"],
});
</script>

<style lang="scss" module>
input {
  color: var(--black);
}

input::placeholder {
  color: var(--black);
}
</style>
