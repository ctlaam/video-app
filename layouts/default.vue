<template>
  <div class="d-flex app justify-content-center">
    <div class="main-content">
      <Header />
      <div id="content" class="mb-5">
        <Nuxt />
      </div>
      <Footer></Footer>
    </div>
    <fullscreen-modal> </fullscreen-modal>
  </div>
</template>

<script>
import Header from "../components/apps/header.vue";
import Navbar from "../components/apps/navbar.vue";
import Footer from "../components/apps/footer.vue";
import FullscreenModal from "../components/apps/FullscreenModal.vue";

export default {
  components: {
    Header,
    Navbar,
    Footer,
    FullscreenModal,
  },
};
</script>

<style lang="scss">
.app {
  padding: 0em 5em;
  background: linear-gradient(
    90deg,
    rgba(255, 228, 202, 1) 4%,
    rgba(236, 178, 255, 1) 100%
  );
  width: 100%;
  position: relative;
  color: #d0d2d6;
  .main-content {
    width: 45%;
    background-color: #f5f5f5;
    position: relative;
  }
}
#content {
  // height: 100vh;
  z-index: 99999;
  position: relative;
  top: -3rem;
  min-height: 78vh;
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
