<template>
    <div>
        <h1>Counter Component</h1>
        <div>{{ count }}</div>
        <div>from mapGetters: {{ safelyStoredNumber }}</div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            count: 0
        }
    }, 
    methods: {
        increment() {
            this.count++
        }
    }, 
    computed: {
        ...mapGetters([
            // ime gettera 
            'safelyStoredNumber'
        ])
    }
}
</script>

<style>

</style>
