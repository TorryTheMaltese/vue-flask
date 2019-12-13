<template>
    <div v-if="currentUrl === 'signUp'">
        <sign-up-component></sign-up-component>
    </div>
</template>

<script>
import SignUpComponent from './SignUpComponent';

export default {
    components: {
        SignUpComponent
    },
    computed: {
        currentUrl() {
            return this.$route.params.name;
        }
    }
}
</script>