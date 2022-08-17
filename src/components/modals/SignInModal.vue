<template>
  <ModalBase :isModalOpen="isModalOpen" @closeModal="$emit('closeModal')">
    <template #header>
      <span :class="$style['modal-title']">Authorization</span>
    </template>
    <template #body>
      <form
        :class="$style['sign_in-form']"
        autocomplete="off"
        name="sign-in"
        @event.prevent
      >
        <label :class="$style['email']">
          <InputBase
            v-model="data.email"
            :class="$style['email']"
            placeholder="Email"
            type="text"
          ></InputBase>
        </label>
        <label :class="$style['password']">
          <InputBase
            v-model="data.password"
            :class="$style['password']"
            :type="typeInput"
            placeholder="Password"
          ></InputBase>
          <button
            :class="$style['show-password']"
            type="button"
            @click="changeType"
          >
            <IconBase height="18" width="18">
              <IconEye v-if="typePassword"></IconEye>
              <IconEyeBlocked v-else></IconEyeBlocked>
            </IconBase>
          </button>
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
import IconEye from "@/components/icons/IconEye";
import IconEyeBlocked from "@/components/icons/IconEyeBlocked";

const typePassword = "password";
const typeText = "text";

export default defineComponent({
  name: "SignInModal",
  components: { IconEyeBlocked, IconEye },
  props: {
    isModalOpen: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["closeModal"],
  data() {
    return {
      data: {
        email: "",
        password: "",
      },
      type: typePassword,
    };
  },
  computed: {
    typeInput() {
      return this.type;
    },
    typePassword() {
      return this.type === typePassword;
    },
  },
  methods: {
    changeType() {
      const password = this.type === typePassword;
      if (password) {
        this.type = typeText;
      } else {
        this.type = typePassword;
      }
    },
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
  width: 100%;
  padding: 0.5rem 1.5rem;
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
  width: 80%;
  margin: 0 auto;
  text-align: center;
}

.enter {
  color: $text-color;
  min-height: 2.5rem;
  min-width: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $purple;
  border-radius: 2.5rem;
}

.enter:hover {
  background-color: $purple-hover;
}

.password {
  position: relative;
}

.show-password {
  color: $black;
  position: absolute;
  width: 10%;
  height: 100%;
  right: 0;
}
</style>
