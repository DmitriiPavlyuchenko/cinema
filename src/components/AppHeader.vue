<template>
  <header :class="$style.header">
    <div :class="$style.logo">
      <router-link :class="$style['logo-link']" :to="{ name: 'homeview' }">
        <img
          :class="$style['logo-img']"
          alt="logo"
          height="56"
          src="@/assets/img/logo.svg"
          width="56"
        />
      </router-link>
    </div>
    <nav :class="$style.menu">
      <ul :class="$style['menu-list']">
        <li class="menu-item">
          <router-link :class="$style['menu-link']" :to="{ name: 'homeview' }"
            >Home
          </router-link>
        </li>
        <li class="menu-item">
          <router-link :class="$style['menu-link']" :to="{ name: 'movies' }"
            >Movies
          </router-link>
        </li>
        <li class="menu-item">
          <router-link :class="$style['menu-link']" :to="{ name: 'series' }"
            >Series
          </router-link>
        </li>
      </ul>
    </nav>
    <div v-if="!isAuth" class="login">
      <ButtonBase class="sign-in" type="button" @click="isModalOpen = true">
        <img
          alt="account"
          class="sign-in-icon"
          height="24"
          src="@/assets/img/icons/account.svg"
          width="24"
        />
      </ButtonBase>
      <teleport to="body">
        <SignInModal
          :isModalOpen="isModalOpen"
          @closeModal="isModalOpen = false"
        >
        </SignInModal>
      </teleport>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
import SignInModal from "@/components/modals/SignInModal";

export default {
  name: "AppHeader",
  components: { SignInModal },

  data() {
    return {
      isModalOpen: false,
    };
  },
  computed: {
    ...mapState("signIn", ["isAuth"]),
  },
};
</script>

<style lang="scss" module>
.header {
  min-height: 4rem;
  display: flex;
  align-items: center;

  .logo {
    flex: 0 0 20%;
    padding-right: 1rem;
  }

  .logo-link {
    display: inline-block;
  }

  .logo-img {
    animation-name: logo-rotation;
    animation-duration: 7s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }

  @keyframes logo-rotation {
    from {
      transform: rotate(0grad) rotateY(0grad) rotateX(0grad);
    }
    to {
      transform: rotate(400grad) rotateY(400grad) rotateX(400grad);
    }
  }

  .menu {
    flex-grow: 1;
  }

  .menu-list {
    display: flex;
    gap: 2rem;
  }

  .menu-link {
    font-size: 0.8rem;
    color: $grey;
    transition: color 0.5s;
  }

  .menu-link:hover {
    color: $text-color;
  }

  .login {
    flex: 1 0 10%;
  }
}
</style>
