import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cardNumber: null,
    cardName: null,
    cardMonth: null,
    cardYear: null,
    cardCVC: null,
    activeFocus: null
  },
  mutations: {
    SET_CARD_NUMBER(state, cardNumber) {
      state.cardNumber = cardNumber;
    },
    SET_CARD_NAME(state, cardName) {
      state.cardName = cardName;
    },
    SET_CARD_MONTH(state, cardMonth) {
      state.cardMonth = cardMonth;
    },
    SET_CARD_YEAR(state, cardYear) {
      state.cardYear = cardYear;
    },
    SET_CARD_CVC(state, cardCVC) {
      state.cardCVC = cardCVC;
    },
    SET_ACTIVE_FOCUS(state, activeFocus) {
      state.activeFocus = activeFocus;
    }
  },
  getters: {
    getCardNumber(state) {
      return state.cardNumber;
    },
    getCardName(state) {
      return state.cardName;
    },
    getCardMonth(state) {
      return state.cardMonth;
    },
    getCardYear(state) {
      return state.cardYear;
    },
    getCardCVC(state) {
      return state.cardCVC;
    },
    getActiveFocus(state) {
      return state.activeFocus;
    }
  }
});
export default store;
