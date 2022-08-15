<template>
  <header :class="$style.header">
    <div :class="$style.logo">
      <router-link :to="{ name: 'homeview' }" :class="$style['logo-link']">
        <img
          src="@/assets/img/logo.svg"
          width="56"
          height="56"
          alt="logo"
          class="logo-img"
        />
      </router-link>
    </div>
    <nav :class="$style.menu">
      <ul :class="$style['menu-list']">
        <li class="menu-item">
          <router-link :to="{ name: 'homeview' }" :class="$style['menu-link']"
            >Home
          </router-link>
        </li>
        <li class="menu-item">
          <router-link :to="{ name: 'movies' }" :class="$style['menu-link']"
            >Movies
          </router-link>
        </li>
        <li class="menu-item">
          <router-link :to="{ name: 'series' }" :class="$style['menu-link']"
            >Series
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="login">
      <button class="sign-in" type="button">
        <img
          src="@/assets/img/icons/account.svg"
          width="24"
          height="24"
          alt="account"
          class="sign-in-icon"
        />
      </button>
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
    flex: 0 0 10%;
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

  .sign-in {
  }

  &__sign-in-icon {
  }
}
</style>
