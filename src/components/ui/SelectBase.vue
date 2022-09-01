<template>
  <fieldset>
    <legend><slot name="list-title"></slot></legend>
    <label :for="labelName"></label>
    <input
      :id="labelName"
      :list="listName"
      :name="labelName"
      :value="modelValue"
      @change="change"
    />
    <datalist :id="listName">
      <slot name="option"></slot>
    </datalist>
  </fieldset>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "SelectBase",
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: [String, null],
      required: true,
    },
    labelName: {
      type: String,
      required: true,
    },
    listName: {
      type: String,
      required: true,
    },
  },
  methods: {
    change(event) {
      console.log(this.$attrs);
      console.log(event.target);
      this.$emit("update:modelValue", event.target.value);
    },
  },
});
</script>

<style scoped></style>
