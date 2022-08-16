<template>
  <transition name="modal">
    <div :class="$style['modal-mask']" :showModal="showModal">
      <div :class="$style['modal-wrapper']">
        <div :class="$style['modal-container']">
          <div :class="['modal-header']">
            <slot name="header"></slot>
          </div>
          <div :class="['modal-body']">
            <slot name="body"></slot>
          </div>
          <div :class="$style['modal-footer']">
            <slot name="footer">
              <ButtonBase :class="$style['modal-button']"> OK </ButtonBase>
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
import ButtonBase from "@/components/ui/ButtonBase";

export default defineComponent({
  name: "ModalBase",
  components: { ButtonBase },
  data() {
    return {
      showModal: false,
    };
  },
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
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  position: relative;
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-footer {
  display: flex;
  text-align: center;
  justify-content: center;
}

.modal-button {
  color: $black;
  display: inline-block;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.modal-close {
  position: absolute;
  color: $black;
  font-size: 1rem;
  background-color: initial;
  top: 0.5rem;
  right: 0.5rem;
}
</style>
