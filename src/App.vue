<template>
  <v-app>
    <div class="d-flex flex-row">
      <div>
        <side-bar />
      </div>

      <div>
        <v-main>
          <v-container fluid class="ma-0 pa-0">
            <router-view></router-view>
          </v-container>
        </v-main>
      </div>
    </div>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import sideBar from "@/components/SideBar.vue";
export default {
  name: "App",
  components: {
    sideBar,
  },
  computed: {
    ...mapState("isMobile", "width"),
  },
  methods: {
    ...mapMutations({
      setIsMobile: "setIsMobile",
      setWidth: "setWidth",
      setHeight: "setHeight",
    }),
    onResize() {
      let { clientWidth, clientHeight } = document.documentElement;
      let is = true;
      if (clientWidth > 600) is = false; //si el ancho de pantalla esmayor a 600px, no es mobile
      this.setIsMobile(is);
      this.setWidth(clientWidth);
      this.setHeight(clientHeight);
    },
  },
  data: () => ({
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard" },
      { title: "Photos", icon: "mdi-image" },
      { title: "About", icon: "mdi-help-box" },
    ],
    right: null,
  }),

  mounted() {
    let passive = { passive: true };
    this.onResize();
    window.addEventListener("resize", this.onResize, passive);
  },
};
</script>
<style lang="scss" scoped>
</style>
