<template>
    <div>
        <market-header-component></market-header-component>
        <router-view></router-view>
    </div>
</template>

<script>
import MarketHeaderComponent from './MarketHeaderComponent';
import router from './routes';

export default {
    router,
    components: {
        MarketHeaderComponent
    }
}
</script>

<style scoped>

</style>