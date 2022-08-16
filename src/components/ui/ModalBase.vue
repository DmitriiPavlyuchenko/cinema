<template>
  <transition appear name="modal">
    <div v-if="isModalOpen" :class="$style['modal-mask']">
      <div :class="$style['modal-wrapper']">
        <div
          :class="$style['modal-container']"
          role="dialog"
          @showModal="$emit('showModal')"
        >
          <div :class="$style['modal-header']">
            <slot name="header"></slot>
          </div>
          <div :class="$style['modal-body']">
            <slot name="body"></slot>
          </div>
          <div :class="$style['modal-footer']">
            <slot name="footer">
              <ButtonBase :class="$style['modal-button']"> OK</ButtonBase>
            </slot>
          </div>
          <ButtonBase
            :class="$style['modal-close']"
            @click="$emit('closeModal')"
            >x
          </ButtonBase>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ModalBase",
  props: {
    isModalOpen: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["closeModal"],
});
</script>

<style lang="scss" module>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.5s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  position: relative;
  max-width: 25rem;
  min-height: 10rem;
  margin: 0 auto;
  padding: 20px 30px;
  background-color: #ffffffe0;
  border-radius: 0.5rem;
  transition: all 0.7s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.modal-footer {
  display: flex;
  text-align: center;
  justify-content: center;
}

.modal-body {
  display: flex;
  gap: 1rem;
  flex-direction: column;
}

.modal-button {
  color: $black;
  display: inline-block;
}

.modal-close {
  position: absolute;
  color: $black;
  font-size: 1.5rem;
  background-color: initial;
  top: 0.5rem;
  right: 0.5rem;
}

.modal-close:hover {
  color: $purple;
}
</style>

<style lang="scss">
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}
</style>
