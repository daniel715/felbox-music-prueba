<template>
  <div
    style="height: 70px; width: 100vw"
    class="audio-player d-flex justify-space-between mt-5"
  >
    <div class="audio-player" style="max-width: 200px">
      <div class="d-flex flex-row">
        <v-img
          style="max-height: 70px"
          width="70px"
          alt="logo"
          :src="this.track.album.cover"
        >
        </v-img>
        <div height="100%" class="d-flex flex-column ml-3 mt-5">
          <h4 style="color: white; font-family: Quicksand; font-size: 10px">
            {{ this.track.title }}
          </h4>
          <h6 style="color: white; font-family: Quicksand; font-size: 5px">
            {{ this.track.artist.name }} - {{ this.track.album.title }}
          </h6>
        </div>
      </div>
    </div>
    <div
      style="height: 100%; width: 150px"
      class="d-flex align-center justify-space-between"
    >
      <v-btn v-if="!playing" icon color="#eb5757" @click="replay()">
        <v-icon color="white" small>mdi-play</v-icon>
      </v-btn>
      <v-btn v-else small icon color="#eb5757" @click="pauseTrack">
        <v-icon color="white" small>mdi-pause</v-icon>
      </v-btn>
      <v-slider
        class="mr-4 mt-5"
        color="white"
        v-model="volume"
        @input="updateVolume(volume)"
        max="1"
        step="0.1"
      >
      </v-slider>
    </div>
  </div>
</template>
  </div>
</template>
<script>
import { Howl, Howler } from "howler";
import { mapState } from "vuex";
export default {
  props: {
    track: {
      type: Object,
      default: null,
    },
  },
  data: () => ({
    playing: false,
    currentTrack: {},
    volume: 0,
  }),
  computed: {
    ...mapState("isMobile"),
  },
  methods: {
    updateVolume() {
      Howler.volume(this.volume);
    },
    pauseTrack() {
      this.currentTrack.howl.pause();
      this.playing = false;
    },
    replay() {
      this.currentTrack.howl.play();
      this.playing = true;
    },
    changeSong() {
      this.currentTrack.howl.pause();
      setTimeout(() => {
        this.currentTrack = this.track;
        this.currentTrack.howl = new Howl({
          src: this.track.preview,
        });
        this.replay();
        this.playing = true;
      }, 500);
    },
    playTrack() {
      if (this.currentTrack.howl == undefined) {
        console.log("entrando al if");
        setTimeout(() => {
          this.currentTrack = this.track;
          this.currentTrack.howl = new Howl({
            src: this.track.preview,
          });
          this.currentTrack.howl.play();
          this.playing = true;
        }, 500);
      } else {
        console.log("entrando al else");
        this.changeSong();
      }
    },
  },
  watch: {
    // track(newVal, oldVal) {
    //     console.log("watcher", newVal)
    //   this.currentTrack = newVal;
    // },
  },
  created() {
    Howler.volume(this.volume);
  },
};
</script>
<style scoped lang="scss">
.audio-player {
  background-color: #eb5757;
}
</style>