<template>
  <aside :class="$style['aside-menu']">
    <h2 :class="$style['menu-title']">Menu</h2>
    <ul :class="$style['menu-list']">
      <li :class="$style['menu-item']">
        <router-link :to="{ name: 'homeview' }" :class="$style['menu-link']">
          <IconBase width="15" height="15" icon-name="home">
            <IconHome />
          </IconBase>
          Home
        </router-link>
      </li>
      <li :class="$style['menu-item']">
        <router-link :to="{ name: 'settings' }" :class="$style['menu-link']">
          <IconBase width="19" height="19" icon-name="settings">
            <IconSettings />
          </IconBase>
          Settings
        </router-link>
      </li>
      <li :class="$style['menu-item']">
        <router-link :to="{ name: 'homeview' }" :class="$style['menu-link']">
          <IconBase width="15" height="15" icon-name="exit">
            <IconExit />
          </IconBase>
          Exit
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IconHome from "@/components/icons/IconHome.vue";
import IconBase from "@/components/ui/IconBase.vue";
import IconSettings from "@/components/icons/IconSettings.vue";
import IconExit from "@/components/icons/IconExit.vue";

export default defineComponent({
  name: "AppAsideMenu",
  components: { IconSettings, IconExit, IconBase, IconHome },
});
</script>

<style lang="scss" module>
.aside-menu {
  max-width: 10%;
  padding: 1rem 1rem 1rem 0;

  .menu-title {
    font-size: 1.2rem;
  }

  .menu-list {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    padding-top: 2rem;
  }

  .menu-link {
    font-size: 0.8rem;
    color: $grey;
    display: flex;
    transition: color 0.5s;
  }

  .menu-link > svg {
    width: 25%;
  }

  .menu-link:hover {
    color: $text-color;
  }
}
</style>
