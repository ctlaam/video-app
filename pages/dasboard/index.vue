<template>
  
</template>

<script>
import * as authApi from '../../api/auth.js'
export default {
  data() {
    return {
      createBill: {},
    }
  },
  created() {
    this.getUserInfo()
  },
  methods: {
    async getUserInfo() {
      const res = await authApi.getUserInfo()
      this.createBill = res
    },
  },
}
</script>

<style lang="scss">
#dashboard {
  .title {
    margin-bottom: 2em;
    .h1 {
      border-right: 1px solid #ccc;
      padding: 0 1rem;
      color: #aaadb4;
    }
    .h3 {
      margin-left: 1rem;
    }
  }
  .notify {
    .item-notify {
      height: 6rem;
      .card-text {
        line-height: 4rem;
      }
    }
    .card {
      background-color: #283046;
      box-shadow: 0 4px 24px 0 rgba(34, 41, 47, 0.24);
      color: #d0d2d6;
      height: 8rem;
      .card-header {
        border: none;
        .avatar {
          color: #7367f0 !important;
          white-space: nowrap;
          background-color: #c3c3c3;
          border-radius: 50%;
          position: relative;
          cursor: pointer;
          color: #fff;
          display: inline-flex;
          padding: 14px;
          text-align: center;
          vertical-align: middle;
          font-weight: 600;
          background: rgba(115, 103, 240, 0.12) !important;
        }
        .bg-light-warning {
          background: rgba(255, 159, 67, 0.12) !important;
          color: #ff9f43 !important;
        }
        .bg-light-danger {
          background: rgba(234, 84, 85, 0.12) !important;
          color: #ea5455 !important;
        }
        .bg-light-success {
          background: rgba(40, 199, 111, 0.12) !important;
          color: #28c76f !important;
        }
      }
    }
  }
}
@media only screen and (max-width: 900px) {
  #dashboard .notify .card {
    height: 10rem;
    font-size: 16px;
  }
  #dashboard .notify .item-notify .card-text {
    line-height: 3rem;
  }
}
</style>
