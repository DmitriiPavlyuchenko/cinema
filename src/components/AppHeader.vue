<template>
  <header :class="$style.header">
    <div
      :class="$style['container-header']"
      class="container"
      @click="closeMenu"
    >
      <div :class="$style['menu-wrapper']">
        <button :class="$style['burger-open']" @click="openMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <router-link :class="$style['logo-link']" :to="{ name: 'home' }">
          <img
            :class="$style['logo-img']"
            alt="logo"
            height="56"
            src="@/assets/img/logo.svg"
            width="56"
          />
        </router-link>
        <nav v-show="isMenuOpen" :class="$style.menu">
          <ul :class="$style['menu-list']">
            <li class="menu-item">
              <router-link :class="$style['menu-link']" :to="{ name: 'home' }">
                <IconBase height="18" icon-name="home" width="18">
                  <IconHome /> </IconBase
                >Главная
              </router-link>
            </li>
            <li class="menu-item">
              <router-link
                :class="$style['menu-link']"
                :to="{ name: 'movies' }"
              >
                <IconBase height="18" icon-name="movie" width="18">
                  <IconMovie />
                </IconBase>
                Кино
              </router-link>
            </li>
            <li class="menu-item">
              <router-link
                :class="$style['menu-link']"
                :to="{ name: 'series' }"
              >
                <IconBase height="18" icon-name="movie" width="18">
                  <IconSeries />
                </IconBase>
                Сериалы
              </router-link>
            </li>
            <li class="menu-item">
              <router-link
                :class="$style['menu-link']"
                :to="{ name: 'series' }"
              >
                <IconBase height="18" icon-name="movie" width="18">
                  <IconCartoons />
                </IconBase>
                Мультики
              </router-link>
            </li>
            <li class="menu-item">
              <router-link
                :class="$style['menu-link']"
                :to="{ name: 'favorites' }"
              >
                <IconBase height="18" icon-name="movie" width="18">
                  <IconFavoritesMenu />
                </IconBase>
                Избранное
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
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
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
import SignInModal from "@/components/modals/SignInModal";
import IconHome from "@/components/icons/IconHome";
import IconMovie from "@/components/icons/IconMovie";
import IconSeries from "@/components/icons/IconSeries";
import IconCartoons from "@/components/icons/IconCartoons";
import IconFavoritesMenu from "@/components/icons/IconFavoritesMenu";

export default {
  name: "AppHeader",
  components: {
    IconFavoritesMenu,
    IconCartoons,
    IconSeries,
    IconMovie,
    IconHome,
    SignInModal,
  },

  data() {
    return {
      isModalOpen: false,
      isMenuOpen: false,
    };
  },
  computed: {
    ...mapState("signIn", ["isAuth"]),
  },
  methods: {
    openMenu() {
      this.isMenuOpen ? (this.isMenuOpen = false) : (this.isMenuOpen = true);
    },
    closeMenu(event) {
      if (event.target.tagName === "A") {
        this.isMenuOpen = false;
      }
    },
  },
};
</script>

<style lang="scss" module>
.header {
  background-color: $dark;

  .container-header {
    min-height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }

  .burger-open {
    width: 1.45rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 1.1rem;
    opacity: 0.5;
    z-index: 160;
  }

  .burger-open > span {
    width: 100%;
    height: 0.1rem;
    background-color: $text-color;
    display: block;
  }

  .burger-open:hover {
    opacity: 1;
  }

  .menu-wrapper {
    flex: 0 0 20%;
    padding-right: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .logo-link {
    display: inline-block;
    z-index: 160;
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
    position: absolute;
    top: -0.5rem;
    width: 13.5rem;
    left: -1rem;
    padding: 4.2rem 1.2rem 1.5rem;
    border-radius: 0 0 0.5rem 0.5rem;
    background-color: $dark-hover;
    z-index: 150;
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.12), 0 1rem 1rem rgba(0, 0, 0, 0.16),
      0 2rem 1.5rem rgba(0, 0, 0, 0.24);
    transition: opacity 0.3s, visibility 0.3s;
  }

  .menu-list {
    display: flex;
    gap: 1.5rem;
    padding-top: 0.8rem;
    flex-direction: column;
  }

  .menu-link {
    font-size: 0.8rem;
    color: $text-color;
    opacity: 0.5;
    transition: opacity 0.5s;
    display: flex;
    align-items: first baseline;
    gap: 0.6rem;
  }

  .menu-link:hover {
    opacity: 1;
  }

  .selected {
    opacity: 1;
    text-underline: $purple;
  }

  .login {
    flex: 1 0 10%;
  }
}
</style>
