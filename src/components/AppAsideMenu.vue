<template>
  <aside :class="$style['aside-menu']">
    <ButtonBase :class="[$style['menu-open']]" type="button" @click="openMenu">
      Меню
    </ButtonBase>
    <ul v-if="openedMenu" :class="$style['menu-list']">
      <li :class="$style['menu-item']">
        <ButtonBase
          :class="$style['menu-link']"
          type="button"
          @click="isFiltersOpen = true"
        >
          <IconBase height="18" icon-name="filter" width="18">
            <IconFilter />
          </IconBase>
          <span>Фильтры</span>
        </ButtonBase>
      </li>
      <li :class="$style['menu-item']">
        <router-link :class="$style['menu-link']" :to="{ name: 'settings' }">
          <IconBase height="19" icon-name="settings" width="19">
            <IconSettings />
          </IconBase>
          <span>Настройки</span>
        </router-link>
      </li>
      <li v-if="isAuth" :class="$style['menu-item']" @click="logout">
        <router-link :class="$style['menu-link']" :to="{ name: 'home-view' }">
          <IconBase height="15" icon-name="exit" width="15">
            <IconExit />
          </IconBase>
          <span>Выход</span>
        </router-link>
      </li>
    </ul>
    <teleport to="body">
      <FiltersModal
        :isFiltersOpen="isFiltersOpen"
        @closeModal="isFiltersOpen = false"
      >
      </FiltersModal>
    </teleport>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import IconSettings from "@/components/icons/IconSettings.vue";
import IconExit from "@/components/icons/IconExit.vue";
import IconFilter from "@/components/icons/IconFilter.vue";
import FiltersModal from "@/components/modals/FiltersModal.vue";

export default defineComponent({
  name: "AppAsideMenu",
  components: {
    FiltersModal,
    IconFilter,
    IconSettings,
    IconExit,
  },
  data() {
    return {
      isMenuOpen: false,
      isFiltersOpen: false,
    };
  },
  computed: {
    ...mapState("signIn", ["isAuth"]),
    openedMenu(): boolean {
      return this.isMenuOpen;
    },
  },
  methods: {
    ...mapActions("signIn", ["logout"]),
    openMenu() {
      this.isMenuOpen ? (this.isMenuOpen = false) : (this.isMenuOpen = true);
    },
  },
});
</script>

<style lang="scss" module>
.aside-menu {
  padding: 1rem 1rem 1rem 0;
  min-width: 20%;

  .menu-open {
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    color: $grey;
    transition: color 0.5s;
  }

  .menu-open:hover {
    color: $text-color;
  }

  .menu-list {
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    transition: all 0.5s ease-in-out;
    animation-name: slide;
    animation-duration: 0.5s;
  }

  @keyframes slide {
    from {
      transform: translateX(-30%);
    }
    to {
      transform: translateX(0%);
    }
  }

  .menu-item {
    display: flex;
  }

  .menu-link {
    font-size: 0.8rem;
    color: $grey;
    transition: color 0.5s;
    display: flex;
  }

  .menu-link > svg {
    margin-right: 1rem;
  }

  .menu-item:not(:last-child) {
    padding-bottom: 2rem;
  }

  .menu-item:nth-child(3) {
    padding-bottom: 1.5rem;
  }

  .menu-item:nth-child(4) {
    padding-top: 1.5rem;
  }

  .menu-link:hover {
    color: $text-color;
  }

  .active {
    display: flex;
  }
}
</style>
