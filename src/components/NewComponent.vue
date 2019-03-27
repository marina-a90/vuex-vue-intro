<template>
    <div>
        <h1>New Component</h1>
        <div>from mapGetters: {{ safelyStoredNumber }}</div>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    data() {
        return {
            count: 0, 
            // inputValue: ''
        }
    },
    computed: {
        ...mapGetters([
            'safelyStoredNumber'
        ])
    }
}
</script>

<style>

</style>
