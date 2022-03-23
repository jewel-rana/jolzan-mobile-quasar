<template>
  <div class="cabin-layout">
    <div class="cabins">
        <div class="overflow-auto" id="cabinLayoutContainer">
          <div class="layoutRowCol">
            <div class="cabin">
              <span class="topLap" >AC</span>
              <div class="cabin-number">202</div>
              <span class="cabin-price">৳ 500</span>
            </div>
          </div>
          <div class="layoutRowCol">
          </div>
          <div class="layoutRowCol">
            <div class="cabin cabin-active">
              <span class="topLap" >AC</span>
              <div class="cabin-number">202</div>
              <span class="cabin-price">৳ 500</span>
            </div>
            <div class="cabin">
              <span class="topLap" >AC</span>
              <div class="cabin-number">202</div>
              <span class="cabin-price">৳ 500</span>
            </div>
            <div class="cabin">
              <span class="topLap" >AC</span>
              <div class="cabin-number">202</div>
              <span class="cabin-price">৳ 500</span>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>


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
}
.layoutRowCol {
  width: 102px;
  padding: 10px;
  display: table-cell;
  flex-direction: row;
  border-left: 1px solid #f2f2f2;
}
.layoutRowCol:first-child {
  border-left: 0;
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
  background: #6c757d;
  position: relative;
  cursor: pointer !important;
  border-radius: 10px;
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
  cursor: not-allowed;
}
.cabin-layout .cabins .cabin.cabin-active, .cabin-layout .cabins .seat.cabin-active {
  background: #7cd753;
}
.cabin-active .cabin-price {
  background-color: #1bc616;
}
.cabin-layout .cabins .cabin.cabin-selected, .cabin-layout .cabins .seat.cabin-selected {
  background: #1e9877;
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
  border-top-left-radius: 10px;
}
.cabin-layout .cabins .cabin .topLap, #availableCabins .cabin .topLap {
  position: absolute;
  top: 0;
  right: 0;
  background: yellow;
  color: #000;
  border: 1px solid #F0EFEF;
  border-right: 0;
  border-top: 0;
  padding: 0px 3px;
  font-size: 10px;
  border-top-right-radius: 10px;
  font-weight: bold;
  line-height: 18px;
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
  background: #219876;
  color: #fff;
  font-size: 14pt;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  text-align: center;
  font-weight: bold;
  line-height: 24px;
}
</style>
