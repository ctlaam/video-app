<template>
  <div class="d-flex app">
    <Navbar />
    <div class="main-content">
      <Header />
      <div id="content" class="mb-5">
        <Nuxt />
      </div>
      <Footer></Footer>
    </div>
    <fullscreen-modal> </fullscreen-modal>
    <div class="modal"></div>
  </div>
</template>

<script>
import Header from '../components/apps/header.vue'
import Navbar from '../components/apps/navbar.vue'
import Footer from '../components/apps/footer.vue'
import FullscreenModal from '../components/apps/FullscreenModal.vue'

export default {
  components: {
    Header,
    Navbar,
    Footer,
    FullscreenModal,
  },
}
</script>

<style lang="scss">
.app {
}
.main-content {
  padding: 2em 5em;
  background-color: #161d31;
  width: 100%;
  color: #d0d2d6;
  position: relative;
}
#content {
  height: 80vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: #e5e5e5;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #e5e5e5;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #888888;
  }
}
@media only screen and (max-width: 1024px) {
  .main-content {
    padding: 2em 2em;
  }
}

</style>
