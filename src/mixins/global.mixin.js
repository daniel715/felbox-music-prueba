import Vue from "vue";
import { mapMutations, mapState } from "vuex";


Vue.mixin({
    data: () => ({}),
    computed: {
        ...mapState({
            isMobile: state => state.isMobile
        }),
    }

});
