import Vue from "vue";
import { mapMutations, mapState } from "vuex";


Vue.mixin({
    data: () => ({}),
    computed: {
        ...mapState({
            isMobile: state => state.isMobile
        }),
    },
    methods: {
        setResultLength(array, length) {
          let result = [];
          for (let index = 0; index < length; index++) {
            result.push(array[index]);
          }
          return result;
        },
        makeid(length) {
          var result = "";
          var characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          var charactersLength = characters.length;
          for (var i = 0; i < length; i++) {
            result += characters.charAt(
              Math.floor(Math.random() * charactersLength)
            );
          }
          return result;
        },
        setText(data) {
          if(data == "") this.searchText = this.makeid(1)
          else this.searchText = data;
        },
    
        async lookForSong() {
          this.response = await this.$axios.get(
            `search?q=track:"${this.searchText}"`
          );
          console.log("response", this.response);
          this.mainSong = this.response.data.data[0];
          let modifiedResponse = this.response.data.data;
          modifiedResponse.shift();
          let otherResults = modifiedResponse;
          this.searchResult = this.setResultLength(otherResults, 8);
        },
        playMainSong() {
          this.currentTrack = this.mainSong;
          this.$refs.player.playTrack();
          // this.$refs.player.changeSong();
        },
        playOtherSong(data) {
          console.log("cancion data", data);
          this.currentTrack = this.response.data.data[data];
          this.$refs.player.playTrack();
        },
      },

});
