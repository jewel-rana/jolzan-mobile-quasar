<template>
  <div>
    <div id="cartSection">
        <q-btn color="primary" class="full-width">Cart (2)</q-btn>
      <q-list bordered separator>

        <q-item>
          <q-item-section avatar top>
            <q-icon name="home" color="black" size="34px" />
          </q-item-section>

          <q-item-section top>
            <q-item-label lines="1">
              <span class="text-weight-medium">MV Tipu 7</span>
              <span class="text-grey-8"> Dhaka - Barisal</span>
            </q-item-label>
            <q-item-label lines="1">
              D201, D202
            </q-item-label>
          </q-item-section>

          <q-item-section top class="col-2">
            <q-item-label class="q-mt-sm">500/-</q-item-label>
          </q-item-section>

          <q-item-section top side>
            <div class="text-grey-8 q-gutter-xs">
              <q-btn size="12px" flat dense round icon="delete" />
            </div>
          </q-item-section>
        </q-item>
      </q-list>
      <div class="row justify-center">
        <q-btn
          type="submit"
          :loading="submitting"
          label="Confirm order"
          class="full-width"
          color="teal"
        >
        </q-btn>
      </div>
    </div>
  </div>
</template>

<style scoped>
#cartSection {
  position: fixed;
  bottom: 56px;
  left: 0;
  right: 0;
  top: auto;
  height: auto;
}
</style>
