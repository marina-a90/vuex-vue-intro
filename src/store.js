import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        safelyStoredNumber: 0
    }, 
    getters: {
        safelyStoredNumber: state => state.safelyStoredNumber
    }, 
    mutations: {
        incrementStoredNumber(state) {
            state.safelyStoredNumber++;
        }, 
        setStoredNumber(state, newNumber) {
            state.safelyStoredNumber = newNumber;
        }
    }, 
    actions: {
        incrementStoredNumber(state) {
            state.commit('incrementStoredNumber')
        },
        setStoredNumber(state, newNumber) {
            state.commit('setStoredNumber', newNumber)
        }, 
        mojaPrvaAkcija(state) {
            //radi nesto
        }
    }
});