<template>
  <v-card elevation="2" color="#000" dark>
    <v-card-text>
      <v-row>
        <v-col cols="3"
          ><v-img :src="require('@/assets/card_chip.png')" width="60"
        /></v-col>
        <v-col cols="6"></v-col>
        <v-col cols="3" class="text-right">
          <v-img
            width="60"
            src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png
"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          style="font-size:20pt;"
          @click="activeFocus = 'cardNumber'"
        >
          <span v-for="(number, index) in cardNumber" :key="index">
            <transition name="slide-fade">
              <div v-if="index <= 6" style="float:left">{{ number }}</div>
              <div v-else style="float:left">*</div>
              <div v-if="index / 4 === 0">&nbsp;</div>
            </transition>
          </span>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "Card",
  data: () => {
    return {
      activeFocus: null
    };
  },
  computed: {
    cardNumber() {
      const cardNumber = this.$store.getters.getCardNumber;
      return cardNumber ? cardNumber : "#### #### #### ####";
    },
    cardName() {
      return this.$store.getters.getCardName;
    },
    cardMonth() {
      return this.$store.getters.getCardMonth;
    },
    cardYear() {
      return this.$store.getters.getCardYear;
    },
    cardCVC() {
      return this.$store.getters.getCardCVC;
    }
  }
};
</script>
