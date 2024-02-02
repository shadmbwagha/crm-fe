<template>
  <Header />
  <main class="">
  <div class="mt-14">
    <Nav></Nav>
  </div>
  <div class="p-2 pt-6 sm:ml-60">
        <router-view />
  </div>
    
  </main>
  
</template>

<script>
import Header from '../components/Header.vue'
import Nav from '../components/Nav.vue'


export default {
  components: { Nav, Header},
  
}
</script>

<style>

</style>