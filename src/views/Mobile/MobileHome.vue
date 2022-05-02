<template>
  <div>
    <div>
      <searchInput @input="setText" class="mt-5" />
    </div>

    <v-card @click="playMainSong()" class="mt-5 ml-5 mx-auto" style="width: 90vw">
      <v-img :src="mainSong.album.cover_xl" height="300px">
        <v-icon style="margin: auto" x-large color="white">mdi-play</v-icon>
      </v-img>
    </v-card>

    <div
      class="
        mt-5
        mx-auto
        justify-center
        d-flex
        align-content-space-around
        flex-wrap
      "
      style="width: 90vw"
    >
      <v-card
        class="ma-1 d-flex justify-start flex-column"
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

    <div class="reproducer" style="position: sticky; bottom: 0px">
      <audio-player ref="player" :track="currentTrack" />
    </div>
  </div>
</template>


<script>
import searchInput from "@/inputs/SearchInput.vue";
import audioPlayer from "@/components/AudioPlayer.vue";
export default {
  name: "MobileHome",
  components: {
    searchInput,
    audioPlayer,
  },

  data: () => ({
    searchText: "",
    mainSong: {},
    searchResult: [],
    currentTrack: {},
    response: [],
  }),
  // methods: {
  //   setResultLength(array, length) {
  //     let result = [];
  //     for (let index = 0; index < length; index++) {
  //       result.push(array[index]);
  //     }
  //     return result;
  //   },
  //   makeid(length) {
  //     var result = "";
  //     var characters =
  //       "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  //     var charactersLength = characters.length;
  //     for (var i = 0; i < length; i++) {
  //       result += characters.charAt(
  //         Math.floor(Math.random() * charactersLength)
  //       );
  //     }
  //     return result;
  //   },
  //   setText(data) {
  //     if(data == "") this.searchText = this.makeid(1)
  //     else this.searchText = data;
  //   },

  //   async lookForSong() {
  //     this.response = await this.$axios.get(
  //       `search?q=track:"${this.searchText}"`
  //     );
  //     console.log("response", this.response);
  //     this.mainSong = this.response.data.data[0];
  //     let modifiedResponse = this.response.data.data;
  //     modifiedResponse.shift();
  //     let otherResults = modifiedResponse;
  //     this.searchResult = this.setResultLength(otherResults, 8);
  //   },
  //   playMainSong() {
  //     this.currentTrack = this.mainSong;
  //     this.$refs.player.playTrack();
  //     // this.$refs.player.changeSong();
  //   },
  //   playOtherSong(data) {
  //     console.log("cancion data", data);
  //     this.currentTrack = this.response.data.data[data];
  //     this.$refs.player.playTrack();
  //   },
  // },
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
