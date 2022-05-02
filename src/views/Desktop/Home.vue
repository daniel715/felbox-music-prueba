<template>
  <div class="container">
    <searchInput @input="setText" class="mt-5" />
    <div
      class="mt-5 d-flex flex-row"
      style="width: 60vw"
    >
      <v-card @click="playMainSong()" class="ml-5 mx-auto" style="width: 30%">
        <v-img width="100%" :src="mainSong.album.cover_xl" height="300px">
          <v-icon style="margin: auto" x-large color="white">mdi-play</v-icon>
        </v-img>
      </v-card>
      <div
        style="
          width: 70%;
          background-image: url('https://i.ytimg.com/vi/UJmq0wEfjTY/maxresdefault.jpg');
        "
      ></div>
      <div
        class="artist-data logo d-flex flex-column"
        style="
          height: 300px;
          position: absolute;
          right: 0;
          z-index: 1;
          width: 800px;
          min

        "
      >
        <div  class="pa-16">
          <h3>Adele 21</h3>
          <div class="d-flex flex-row">
            <h5>Lo mejor de Adele</h5>
            <span>50 000 seguidores</span>
          </div>

          <span>
            Adele Laurie inglaterra es conocida por sus cacnciones y porque esta
            gordita</span
          >
        </div>

        <div class="ml-15">
          <v-btn width="150px" class="white--text" rounded color="#E86060"
            >Reproducir</v-btn
          >
        </div>
      </div>
    </div>

    <div class="resultados mt-5 ml-5">
      <h1 style="color: #ed8787">Resultados</h1>
      <div
        style="max-width: 60vw"
        class="mt-5 d-flex align-content-space-around flex-row flex-wrap"
      >
        <v-card
          class="mx-auto my-2 d-flex justify-start flex-column"
          v-for="(result, i) in searchResult"
          :key="i"
          style="width: min-content"
          elevation="0"
          @click="playOtherSong(i)"
        >
          <v-img :src="result.album.cover" style="max-height: 100px">
            <v-icon style="margin: auto" x-large color="white">mdi-play</v-icon>
          </v-img>
          <div height="50px" class="d-flex flex-column ml-3 mt-3">
            <h4 style="color: black">{{ result.title }}</h4>
            <h6 style="color: white">{{ result.artist.name }}</h6>
          </div>
        </v-card>
      </div>
    </div>
    <div class="reproducer ml-n3" style="position: sticky; bottom: 0px">
      <audio-player ref="player" :track="currentTrack" />
    </div>
  </div>
</template>


<script>
import searchInput from "@/inputs/SearchInput.vue";
import audioPlayer from "@/components/AudioPlayer.vue";
export default {
  name: "Home",
  components: {
    searchInput,
    audioPlayer
  },
  data: () => ({
    mainSong: {},
    searchText: "",
    searchResult: [],
    currentTrack: {},
  }),
  watch: {
    searchText(newVal, oldVal) {
      console.log("text", this.searchText);
      this.lookForSong();
    },
  },
  created() {
    this.searchText = this.makeid(1);
    this.lookForSong();
  },
};
</script>
<style scoped lang="scss">
.logo {
  background-color: #c38989;
  opacity: 0.9;
}
.artist-data {
  color: white;
}
</style>