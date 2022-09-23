<template>
  <ModalBase :isModalOpen="isModalOpen" @closeModal="close">
    <template #header>
      <span>Авторизация</span>
    </template>
    <template #body>
      <form :class="$style['sign_in-form']" name="sign-in" @submit.prevent>
        <label :class="$style['email']">
          <InputBase
            v-model="user.email"
            :class="$style['email']"
            autocomplete="off"
            placeholder="Почта"
            type="text"
          ></InputBase>
        </label>
        <label :class="$style['password']">
          <InputBase
            v-model="user.password"
            :class="$style['password']"
            :type="typeInput"
            autocomplete="off"
            placeholder="Пароль"
          ></InputBase>
          <ButtonBase
            :class="$style['show-password']"
            type="button"
            @click="changeType"
          >
            <IconBase height="18" width="18">
              <IconEye v-if="typePassword" class="icon-eye"></IconEye>
              <IconEyeBlocked v-else></IconEyeBlocked>
            </IconBase>
          </ButtonBase>
        </label>
        <ButtonBase :class="$style.enter" type="submit" @click="signIn"
          >Вход
        </ButtonBase>
      </form>
    </template>
  </ModalBase>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import IconEye from "@/components/icons/IconEye";
import IconEyeBlocked from "@/components/icons/IconEyeBlocked";
import ButtonBase from "@/components/ui/ButtonBase";

const typePassword = "password";
const typeText = "text";

export default defineComponent({
  name: "SignInModal",
  components: {
    ButtonBase,
    IconEyeBlocked,
    IconEye,
  },
  props: {
    isModalOpen: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["closeModal"],
  data() {
    return {
      user: {
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
    ...mapActions("signIn", ["authorization"]),

    async signIn() {
      try {
        const response = await this.authorization(this.user);
        if (response) {
          this.$toast.success("Добро пожаловать", {
            duration: 3000,
          });
          this.user = {
            email: "",
            password: "",
          };
          this.close();
        } else {
          throw "Error";
        }
      } catch (e) {
        console.log(e);
        this.$toast.error("Упс, что-то пошло не так", {
          duration: 3000,
        });
      }
    },

    changeType() {
      const password = this.type === typePassword;

      if (password) {
        this.type = typeText;
      } else {
        this.type = typePassword;
      }
    },

    close() {
      this.$emit("closeModal");
    },
  },
});
</script>

<style lang="scss" module>
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
  border: 2px solid var(--black);
}

input::placeholder {
  color: var(--black);
}

input:focus {
  border: 2px solid var(--purple);
}

label {
  width: 80%;
  margin: 0 auto;
  text-align: center;
}

.enter {
  color: var(--text-color);
  min-height: 2.5rem;
  min-width: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--purple);
  border-radius: 2.5rem;
}

.enter:hover {
  background-color: var(--purple);
}

.password {
  position: relative;
}

.show-password {
  color: var(--black);
  position: absolute;
  width: 10%;
  height: 100%;
  right: 0;
}
</style>
