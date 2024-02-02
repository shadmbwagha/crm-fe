<template>
  <router-view /> 
</template>

<script>
import Header from './components/Header.vue'
import Nav from './components/Nav.vue'

export default {
components: { Nav },
components: { Nav, Header }
}
</script>

<style>

</style>