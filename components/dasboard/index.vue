<template>
  <div id="dashboard">
    <div class="slider mb-4">
      <a-carousel autoplay>
        <div class="img-slider">
          <img src="../../assets/slider/1.jpg" alt="" />
        </div>
        <div class="img-slider">
          <img src="../../assets/slider/2.jpg" alt="" />
        </div>
        <div class="img-slider">
          <img src="../../assets/slider/3.jpg" alt="" />
        </div>
        <div class="img-slider">
          <img src="../../assets/slider/4.jpeg" alt="" />
        </div>
      </a-carousel>
    </div>
    <div class="content">
      <div class="part1 p-2 m-4">
        <div class="d-flex align-items-center justify-content-between">
          <h2 class="title">Gói bình chọn cho ca sĩ</h2>
          <p class="more d-flex align-items-center">
            Xem thêm <a-icon type="right" />
          </p>
        </div>
        <div class="row p-4 list-item-select">
          <div class="col-3 item">
            <img class="mb-4" src="../../assets/select/1.jpg" alt="" />
            <h3>Bình chọn 1</h3>
          </div>
          <div class="col-3 item">
            <img class="mb-4" src="../../assets/select/2.jpg" alt="" />
            <h3>Bình chọn 2</h3>
          </div>
          <div class="col-3 item">
            <img class="mb-4" src="../../assets/select/3.jpg" alt="" />
            <h3>Bình chọn 3</h3>
          </div>
          <div class="col-3 item">
            <img class="mb-4" src="../../assets/select/4.jpg" alt="" />
            <h3>Bình chọn 4</h3>
          </div>
        </div>
      </div>
      <div class="part2 p-2 m-4">
        <div class="d-flex align-items-center justify-content-between">
          <h2 class="title">Phổ biến nhất</h2>
          <p class="more d-flex align-items-center">
            Xem thêm <a-icon type="right" />
          </p>
        </div>
        <div class="slider p-4">
          <a-carousel autoplay>
            <div class="img-slider">
              <img src="../../assets/slider/1.jpg" alt="" />
              <span class="stt no1"></span>
            </div>
            <div class="img-slider">
              <img src="../../assets/slider/2.jpg" alt="" />
              <span class="stt no1"></span>
            </div>
            <div class="img-slider">
              <img src="../../assets/slider/3.jpg" alt="" />
              <span class="stt no1"></span>
            </div>
            <div class="img-slider">
              <img src="../../assets/slider/4.jpeg" alt="" />
              <span class="stt no1"></span>
            </div>
          </a-carousel>
        </div>
      </div>
      <div class="part3 p-2 m-4">
        <div class="d-flex align-items-center justify-content-between">
          <h2 class="title">Đề xuất phổ biến</h2>
          <p class="more d-flex align-items-center">
            Xem thêm <a-icon type="right" />
          </p>
        </div>
        <div class="row list-video p-4">
          <div class="col-6 video">
            <a href="" title="" class="item-movie"
              ><span class="img"
                ><img src="../../assets/movie/1.jpg" alt=""
              /></span>
              <div class="ct">
                <div class="title h4">Phim hành động 2</div>
                <div class="count">Xem:1456</div>
              </div></a
            >
          </div>
          <div class="col-6 video">
            <a href="" title="" class="item-movie"
              ><span class="img"
                ><img src="../../assets/movie/5.jpg" alt=""
              /></span>
              <div class="ct">
                <div class="title h4">Phim hành động 2</div>
                <div class="count">Xem:1456</div>
              </div></a
            >
          </div>
          <div class="col-6 video">
            <a href="" title="" class="item-movie"
              ><span class="img"
                ><img src="../../assets/movie/2.jpg" alt=""
              /></span>
              <div class="ct">
                <div class="title h4">Phim hành động 2</div>
                <div class="count">Xem:1456</div>
              </div></a
            >
          </div>
          <div class="col-6 video">
            <a href="" title="" class="item-movie"
              ><span class="img"
                ><img src="../../assets/movie/3.jpg" alt=""
              /></span>
              <div class="ct">
                <div class="title h4">Phim hành động 2</div>
                <div class="count">Xem:1456</div>
              </div></a
            >
          </div>
          <div class="col-6 video">
            <a href="" title="" class="item-movie"
              ><span class="img"
                ><img src="../../assets/movie/4.jpg" alt=""
              /></span>
              <div class="ct">
                <div class="title h4">Phim hành động 2</div>
                <div class="count">Xem:1456</div>
              </div></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as authApi from "../../api/auth.js";
export default {
  data() {
    return {
      createBill: {},
    };
  },
  components: {},
  created() {
    this.getUserInfo();
  },
  methods: {
    async getUserInfo() {
      const res = await authApi.getUserInfo();
      this.createBill = res;
    },
  },
};
</script>

<style lang="scss">
#dashboard {
  padding: 1rem;
  .slider {
    width: 100%;
    height: 20vh;
    overflow: hidden;
    .img-slider {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
      }
    }
  }
  .content {
    .part1,
    .part2 {
      background-color: #fff;
      color: #18a57a;
      .title {
        position: relative;
        padding-left: 1rem;
        font-weight: 700;
        &::before {
          content: "";
          position: absolute;
          left: 0;
          width: 0.4rem;
          background-color: #5fbfd9;
          height: 70%;
          top: 15%;
          border-radius: 0.4rem;
        }
      }
    }
    .list-item-select {
      .item {
        text-align: center;
        img {
          height: 6rem;
          width: 6rem;
          object-fit: cover;
          border-radius: 5px;
        }
      }
    }
    .part2 {
      .img-slider {
        position: relative;
        .stt.no1 {
          background: url(../../assets/select/no1.png) no-repeat center;
        }
        .stt {
          position: absolute;
          left: 0;
          top: -1px;
          width: 5.7rem;
          height: 5.7rem;
          background-size: 100% 100% !important;
        }
      }
    }
    .part3 {
      background-color: #fff;
      color: #18a57a;
      .title {
        position: relative;
        padding-left: 1rem;
        font-weight: 700;
      }
      .list-video {
        .item-movie {
          position: relative;
          border-radius: 0.5rem;
          overflow: hidden;
          margin-bottom: 1.5rem;
          display: block;
          transition: all 0.3s ease-out;
          &:hover {
            transform: scale(1.05);
          }
          .img {
            display: block;
            padding-top: 80%;
            position: relative;
            img {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
            }
          }
          .ct {
            color: #fff;
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            padding: 1rem;
            background-color: rgba(0, 0, 0, 0.4);
            font-size: 13px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            .title {
              -webkit-box-flex: 1;
              -ms-flex-positive: 1;
              flex-grow: 1;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
              line-height: 1.5em;
              height: calc(1.5em * 1);
            }
          }
        }
      }
    }
  }
}
</style>
