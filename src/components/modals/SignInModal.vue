<template>
  <ModalBase :isModalOpen="isModalOpen" @closeModal="$emit('closeModal')">
    <template #header>
      <span :class="$style['modal-title']">Авторизация</span>
    </template>
    <template #body>
      <form
        :class="$style['sign_in-form']"
        autocomplete="off"
        name="sign-in"
        @event.prevent
      >
        <label>
          <InputBase
            v-model="email"
            placeholder="Email"
            type="text"
          ></InputBase>
        </label>
        <label>
          <InputBase
            v-model="password"
            placeholder="Password"
            type="password"
          ></InputBase>
        </label>
      </form>
    </template>
    <template #footer>
      <ButtonBase :class="$style.enter" type="submit">Enter</ButtonBase>
    </template>
  </ModalBase>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SignInModal",
  props: {
    isModalOpen: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["closeModal"],
  data() {
    return {
      email: "",
      password: "",
    };
  },
});
</script>

<style lang="scss" module>
.modal-title {
  font-size: 1.5rem;
  text-align: center;
  color: $black;
}

.sign_in-form {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  padding: 1rem 0;
  align-items: center;
}

input {
  max-width: 80%;
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.3rem;
  border: 2px solid $black;
}

input::placeholder {
  color: $black;
}

input:focus {
  border: 2px solid $purple;
}

label {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}

.enter {
  color: $text-color;
  min-height: 2.5rem;
  min-width: 6rem;
  background-color: $purple;
  border-radius: 2.5rem;
}

.enter:hover {
  background-color: $purple-hover;
}
</style>
