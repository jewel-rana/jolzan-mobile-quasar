<template>
  <div class="cabin-layout">
    <div class="cabins">
        <div class="overflow-auto" id="cabinLayoutContainer">
          <div class="layoutRowCol" v-for="(item, index) in items" :key="index">
            <div class="cabin" v-for="(data, indx) in item" :class="data.cabin_class" :key="indx" @click="addToCard($event, data)">
              <div class="topLap" >AC</div>
              <div class="cabin-number">{{ data.cabin_no }}</div>
              <div class="cabin-price">৳ {{ data.fare }}</div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  props: ['items'],
  created()
  {
    console.log(this.items)
  },
  methods: {
    addToCard(event, cabin)
    {
      console.log(cabin)
      if (cabin.status == 1 && cabin.cabin_class == 'cabin-active') {
        this.$store.dispatch('general/addCart', {item: cabin, token: this.customer_token})
          .then(() => {
            console.log('item has been added to cart')
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    addToCartDeck()
    {
      this.$store.dispatch("general/AddDeckTicketToCart")
    },
    cabinStatus(cabin)
    {
      var status = "cabin-active"
      switch (cabin.status) {
        case '0' :
          status = "cabin-active"
          break
        case '1' :
          status = "cabin-disable"
          break;
      }
      return status
    },
    filterCabinByType(property = 'cabin', type)
    {
      this.$store.dispatch('general/FilterByType', {property: property, type: type})
    }
  }
}
</script>

<style scoped>
body .q-expansion-item__container .q-hoverable:hover .q-focus-helper {
  background: inherit;
  opacity: 0;
}
.cursor-pointer {
   cursor: inherit !important;
}
.q-focus-helper, .q-focusable, .q-manual-focusable, .q-hoverable {
  background: #fff !important;
}
#cabinLayoutContainer {
  width: 100%;
}
.search-container > .card {
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1)
}
.cabin-layout {
  /* background: url("../assets/img/cabin_layout.png"); */
  background-repeat: no-repeat;
  background-size: 100% 75%;
  align-items: center;
}
.layoutRowCol {
  width: 102px;
  padding: 10px;
  display: table-cell;
  flex-direction: row;
  border-left: 1px solid #f2f2f2;
}
.layoutRowCol.empty {
  background: #f9f9f9;
}
.layoutRowCol:first-child {
  border-left: 0;
  background-color: #f2f2f2;
}
.layoutRowCol:last-child {
  background-color: #f2f2f2;
}
.cabinLayoutContainer .nav-link {
  padding: 8px;
}
.cabin-layout {
  min-height: 320px;
  max-height: 480px;
  overflow: hidden;
}
.cabin-layout:hover {
  overflow-y: auto;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: #219876 #2198764a;
  -webkit-scrollbar-width: thin;
  -webkit-scrollbar-color: #219876 #2198764a;
  -moz-scrollbar-width: thin;
  -moz-scrollbar-color: #219876 #2198764a;
}
.cabin-layout::-webkit-scrollbar {
  width: 2px;
}

.cabin-layout::-webkit-scrollbar-track {
  background: #2198764a;
}

.cabin-layout::-webkit-scrollbar-thumb {
  background: #219876;
  width: 5px;
}
.cabin-layout .cabins {
  margin: 25px auto;
  justify-content: center;
}

.cabin, .seat {
  width: 75px;
  height: 75px;
  margin: 0 auto 30px;
  border: 0px solid #F0EFEF;
  padding: 0px;
  background: #69b3f4;
  position: relative;
  cursor: pointer !important;
  border-radius: 4px;
  -webkit-box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.25);
  box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.25);
  overflow:hidden;
}
.cabin:hover, .seat:hover{
  background: #c2cac1;
}
.cabin-layout .cabins .cabin.cabin-disable, .cabin-layout .cabins .seat.cabin-disable {
  background: #d0d0d0;
  cursor: not-allowed !important;
}
.cabin-active .cabin-price {
  background-color: #1bc616;
}
.cabin-layout .cabins .cabin.cabin-selected, .cabin-layout .cabins .seat.cabin-selected {
  background: #7cd753;
}
.cabin-layout .cabins .cabin.cabin-checked, .cabin-layout .cabins .seat.cabin-checked {
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 5px;
  background: #46b796;
  border-top-left-radius: 4px;
}
.cabin-layout .cabins .cabin .topLap, #availableCabins .cabin .topLap {
  top: 0;
  right: 0;
  left: auto;
  width: auto;
  background: yellow;
  color: #000;
  border: 1px solid #F0EFEF;
  border-right: 0;
  border-top: 0;
  padding: 0px 3px;
  font-size: 10px;
  border-top-right-radius: 4px;
  font-weight: bold;
  line-height: 18px;
  position: absolute;
}
.cabin-layout .cabins .cabin .cabin-number, .cabin-layout .cabins .seat .cabin-number, #availableCabins .cabin .cabin-number {
  font-size: 13pt;
  padding: 10px 0 20px 0;
  text-align: center;
  color: #fff;
  font-weight: bold;
  line-height: 40px;
}
.cabin-layout .cabins .cabin .cabin-price, .cabin-layout .cabins .seat .cabin-price, #availableCabins .cabin .cabin-price {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  background: #2c79dd;
  color: #fff;
  font-size: 12pt;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  text-align: center;
  font-weight: bold;
  line-height: 24px;
}
.cabin.empty {
  background: none;
}
.cabin.empty > .cabin-price, .cabin.empty > .topLap {
  display: none;
}
</style>
