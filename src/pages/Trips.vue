<template>
  <q-page>
    <div class="q-pt-md q-pb-md">
      <q-list>
        <trip-item></trip-item>
      </q-list>
    </div>
  </q-page>
</template>
<script>
import TripItem from "components/TripItem";
import {mapState} from "vuex";
export default {
  components: {TripItem},
  computed: {
    ...mapState('general', ['my_trips'])
  }
}
</script>
