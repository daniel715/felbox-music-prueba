<template>
  <v-text-field
    v-model="localModel"
    append-icon="mdi-magnify"
    class="flex-grow-1 no-margin-bottom search-input"
    solo
    hide-details
    dense
    autocomplete="new-password"
    clearable
    :placeholder="placeholder"
    @keyup.enter="onEnter"
    :background-color="backgroundColor"
    outlined
    :style="{ maxWidth: maxWidth }"
    autofocus
    rounded
    color="#EB5757"
  ></v-text-field>
</template>

<script>
export default {
  name: "SearchInput",
  props: {
    placeholder: {
      type: String,
      default: "Buscar"
    },
    value: {
      type: String
    },
    backgroundColor: {
      type: String,
      default: "backgroundSearch"
    },
    maxWidth: {
      type: String,
      default: "400px"
    }
  },
  data: () => ({
    localModel: ""
  }),
  methods: {
    //emite evento enter
    onEnter() {
      this.$emit("enter");
    },
    //emite evento input para actualizar v-model
    onInput() {
      this.$emit("input", this.localModel);
    },
    eraseLocalModel() {
      this.localModel = "";
    }
  },
  computed: {},
  watch: {
    //observa un cambio en la propiedad localModel y actualiza valor a v-model padre
    localModel(newVal, oldVal) {
      this.onInput();
    }
  },
  created() {
    this.localModel = "";
  }
};
</script>
<style></style>
