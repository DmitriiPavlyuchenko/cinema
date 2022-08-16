<template>
  <header :class="$style.header">
    <div :class="$style.logo">
      <router-link :class="$style['logo-link']" :to="{ name: 'homeview' }">
        <img
          alt="logo"
          class="logo-img"
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
    <div class="login">
      <ButtonBase class="sign-in" type="button" @click="openModal = true">
        <img
          alt="account"
          class="sign-in-icon"
          height="24"
          src="@/assets/img/icons/account.svg"
          width="24"
        />
      </ButtonBase>
      <ModalBase
        :showModal="openModal"
        @closeModal="openModal = false"
      ></ModalBase>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
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

  &__logo-img {
  }

  .menu {
    flex-grow: 1;
  }

  .menu-list {
    display: flex;
    gap: 2rem;
  }

  &__menu-item {
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
