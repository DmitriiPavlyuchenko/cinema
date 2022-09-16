<template>
  <footer :class="$style.footer">
    <div :class="$style['footer-container']" class="container">
      <router-link :class="$style['menu-link']" :to="{ name: 'home' }">
        <AppLogotype :class="$style.logotype" />
      </router-link>
      <ul :class="$style['menu-list']">
        <li :class="$style['menu-item']">
          <router-link :class="$style['menu-link']" :to="{ name: 'movies' }">
            Кино
          </router-link>
        </li>
        <li :class="$style['menu-item']">
          <router-link :class="$style['menu-link']" :to="{ name: 'series' }">
            Сериалы
          </router-link>
        </li>
        <li :class="$style['menu-item']">
          <router-link :class="$style['menu-link']" :to="{ name: 'cartoons' }">
            Мультики
          </router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import AppLogotype from "@/components/AppLogotype";

export default {
  name: "AppFooter",
  components: {
    AppLogotype,
  },
};
</script>

<style lang="scss" module>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: $dark;
}

.footer-container {
  display: flex;
  align-items: center;
  min-height: 3.5rem;
  justify-content: center;
}

.logotype {
  display: flex;
}

.menu-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 80%;
  gap: 1.5rem;
  color: $text-color;
  font-size: 0.8rem;
}

.menu-item {
  opacity: 0.5;
  transition: 0.5s;
  position: relative;
}

.menu-item:hover:after {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  border-bottom: 0.1rem solid $purple;
  padding-bottom: 0.2rem;
}

.menu-item:hover {
  opacity: 1;
}
</style>
