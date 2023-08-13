<!-- components/FullscreenModal.vue -->
<template>
  <div v-if="loading" class="fullscreen-loading">
    <a-spin size="large" />
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    loading() {
      // Đọc giá trị modalLoading từ Vuex store (Sử dụng getter modalLoading)
      return this.$store.getters['loading/modalLoading']
    },
  },
  created() {
    setTimeout(() => {
      this.handleCancel()
    }, 3000)
  },
  methods: {
    handleCancel() {
      this.$emit('update:visible', false)
    },
  },
}
</script>

<style>
.fullscreen-loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 9999;
}
</style>
