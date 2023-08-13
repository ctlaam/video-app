<template>
  <div class="account-content">
    <Nuxt />
    <fullscreen-modal> </fullscreen-modal>
  </div>
</template>
<script>
import FullscreenModal from '../components/apps/FullscreenModal.vue'
export default {
  components: {
    FullscreenModal,
  },
}
</script>

<style scoped>
.account-content {
  width: 100vw;
  height: 100vh;
  background-color: rgba(34, 41, 47, 0.5);
  cursor: pointer;
  transition: all 0.7s, z-index 0s;
}
</style>
