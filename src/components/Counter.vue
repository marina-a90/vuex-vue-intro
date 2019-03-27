<template>
    <div>
        <h1>Counter Component</h1>
        <div>from the component directly: {{ count }}</div>
        <div>from mapGetters: {{ safelyStoredNumber }}</div>
        <div><button @click.prevent="incrementStoredNumber">Click me</button></div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    data() {
        return {
            count: 0
        }
    }, 
    methods: {
        increment() {
            this.count++
        }, 

        //spread operator!!!
        ...mapMutations([
            //ime mutacije
            'incrementStoredNumber',
            'setStoredNumber'
        ])
    }, 
    computed: {
        //spread operator!!!
        ...mapGetters([
            // ime gettera 
            'safelyStoredNumber'
        ])
    }
}
</script>

<style>

</style>
