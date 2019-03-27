<template>
    <div>
        <h1>Counter Component</h1>
        <div>from the component directly: {{ count }}</div>
        <div>from mapGetters: {{ safelyStoredNumber }}</div>
        <div><button @click.prevent="incrementStoredNumber">Click me</button></div>
        <input v-model="inputValue" @keyup.enter="setStoredNumber(inputValue)"/>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    data() {
        return {
            count: 0, 
            inputValue: ''
        }
    }, 
    methods: {
        increment() {
            this.count++
        }, 

        //spread operator!!!
        //u nizu!
        // ...mapMutations([
        //     //ime mutacije
        //     'incrementStoredNumber',
        //     'setStoredNumber'
        //     //mutacije su funkcije
        // ])
        ...mapActions([
            //ime mutacije
            'incrementStoredNumber',
            'setStoredNumber'
            //mutacije su funkcije
        ])
    }, 
    computed: {
        //spread operator!!!
        //u nizu!
        ...mapGetters([
            // ime gettera 
            'safelyStoredNumber'
        ])
    }
}
</script>

<style>

</style>
