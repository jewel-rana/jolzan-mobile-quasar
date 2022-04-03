<template>
  <q-page class="q-gutter q-pa-md">
    <cart-bottom v-if="cart.length"></cart-bottom>
    <q-card class="q-mt-lg">
      <q-card-section class="q-pb-none">
        <div class="text-blue-5 q-pb-none">Accept out terms & conditions</div>
      </q-card-section>
      <q-card-section>
        <div id="termsScroller">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et urna mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin placerat sapien quis nisl ultrices, non convallis dolor faucibus. Quisque auctor risus ut enim ultricies, a egestas nisi pellentesque. Aenean aliquet tincidunt sodales. Nam dignissim, nulla sit amet pharetra consequat, turpis sapien gravida elit, auctor gravida ligula ex tempor nisl. Cras nulla justo, luctus tincidunt felis eget, blandit tristique ex. Pellentesque dapibus erat non odio imperdiet scelerisque. Vestibulum malesuada ullamcorper eros, id porttitor nisl ornare non. Aliquam erat volutpat.
          </p><p>Mauris faucibus turpis lorem, non ornare ipsum congue nec. In ac tincidunt magna. Curabitur congue, nisi sit amet malesuada cursus, augue ante varius mauris, nec congue nisl turpis id purus. Pellentesque vel scelerisque diam, ut feugiat tortor. Curabitur efficitur tristique enim, id sagittis dui semper vitae. Sed lorem dolor, eleifend sed lacus sit amet, congue ornare velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam nisl risus, elementum ut imperdiet ac, congue a lacus. Maecenas et laoreet orci, vel vestibulum est. Mauris erat lacus, tempus vitae egestas in, sodales ac nibh. Curabitur suscipit id nisi eget finibus. Nam lacinia, orci et luctus dictum, eros tortor placerat ex, vel convallis nisi erat quis metus. Vivamus non nunc ac neque varius venenatis eu at sapien. Sed vitae justo nec felis blandit feugiat.
        </p><p>Donec dictum nisl nec quam scelerisque, quis condimentum dui facilisis. Curabitur ultrices eget felis ac rutrum. Morbi auctor mattis lectus ultrices eleifend. Pellentesque pellentesque odio nisl, vitae volutpat lorem malesuada a. Nullam sodales semper nunc, eget rhoncus tortor ultrices id. Vestibulum at laoreet justo. Morbi ornare cursus orci accumsan condimentum. Aliquam vulputate nisl at elit euismod tincidunt. Vestibulum et tellus orci. Quisque porta, ligula vitae tempor accumsan, orci lectus placerat nunc, vel tincidunt justo leo eget leo. Nam fermentum sem libero. Etiam ipsum odio, aliquam vitae eleifend vitae, mattis ut lacus.
        </p><p>Praesent hendrerit et dui nec dignissim. Nam tempus sed diam non ullamcorper. Suspendisse ornare ipsum vel tempus placerat. Etiam neque nisl, tempor sed bibendum ac, faucibus ut metus. In eu eros at sapien sollicitudin porta id in enim. Ut vel dui a mi tristique consequat. Etiam egestas magna quis nunc placerat gravida. Aenean faucibus pulvinar mi vel varius.
        </p><p>Mauris non erat erat. Suspendisse potenti. Aenean cursus lacinia odio dignissim ullamcorper. Curabitur turpis justo, faucibus quis lectus quis, dapibus interdum ex. Cras consectetur tincidunt ante, vel venenatis massa gravida dapibus. Ut interdum lacus vel risus viverra, ut tempor felis ornare. Quisque ultrices dolor vitae sodales dictum. Aliquam ut pellentesque augue. Morbi vulputate hendrerit magna vel vestibulum. Phasellus accumsan at risus eget bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
        </div>
      </q-card-section>
    </q-card>
    <confirm-button :step="`terms`"></confirm-button>
  </q-page>
</template>
<script>
import CartItem from "components/CartItem";
import CartBottom from "components/CartBottom";
import NoResult from "components/NoResult";
import ConfirmButton from "components/cart/ConfirmButton";
import {mapState} from "vuex";

export default {
  components: {
    CartItem,
    CartBottom,
    NoResult,
    ConfirmButton
  },
  computed: {
    ...mapState('general', ['cart'])
  }
}
</script>

<style scoped>
#termsScroller {
  max-height: 120px;
  overflow: scroll;
}
</style>
