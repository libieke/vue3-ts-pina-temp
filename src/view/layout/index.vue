<template>
  <div class="layout">
    <div class="layout-heard">
      <div class="heard-box">
        <div class="heard-nas">
          <div
            class="nav-item"
            v-for="(item, index) in heardNavs"
            :class="{ 'nav-action': navActive == item.name }"
            :key="index"
          >
            <div class="nav-item-box" v-if="!item.isSubNav" @click="heardGoTo(item.name)">
              <div class="title">
                {{ item.title }}
              </div>
            </div>
            <div
              class="nav-item-box"
              v-else
              @mouseenter="item.isShowSub = !item.isShowSub"
              @mouseleave="item.isShowSub = !item.isShowSub"
            >
              <div class="title">
                {{ item.title }}
              </div>
              <div class="image"></div>
              <transition name="slide-fade">
                <div class="sub-navs" v-show="item.isShowSub">
                  <div
                    class="sub-nas-item"
                    v-for="(subItem, ind) in item.subNav"
                    :key="ind"
                    :class="{ 'sub-nav-active': subActive == subItem.name }"
                    @click="heardGoTo(subItem.name)"
                  >
                    {{ subItem.title }}
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>

        <div class="heard-info">
          <div class="datetime info-item">
            <div class="time">{{ headerTime }}</div>
            <div class="date">
              <span style="margin-right: 8px">{{ headerDate }}</span
              ><span>星期{{ ["日", "一", "二", "三", "四", "五", "六"][week] }}</span>
            </div>
          </div>
          <div class="user-address info-item">
            <div class="user">
              <span>孙学翠(网格长)</span>
            </div>
            <div class="address">
              <span>胡陈村</span>
            </div>
          </div>
          <div class="out info-item">退出</div>
        </div>
      </div>
    </div>
    <div class="layout-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { parseTime } from "@/utils/utils";
import { HeardNavs } from "./js/json";
export default {
  name: "layout",
  setup() {
    let week = ref(new Date().getDay());
    const router = useRouter();
    let navActive = ref("");
    let subActive = ref("");
    let heardNavs = ref(HeardNavs);
    let headerDate = ref(parseTime(new Date(), "{y}-{m}-{d}"));
    let headerTime = ref(parseTime(new Date(), "{h}:{i}:{s}"));

    // 监听
    watch(
      () => router.currentRoute.value,
      (newVal, oldval) => {
        if (oldval == undefined || newVal.name != oldval.name) {
          navActive.value = newVal.meta.navName;
          subActive.value = newVal.name || "";
        }
      },
      {
        immediate: true,
        deep: true,
      }
    );

    return {
      week,
      subActive,
      navActive,
      heardNavs,
      headerDate,
      headerTime,
    };
  },
};
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
.iconfont {
  font-size: 20px !important;
}
.layout {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 2;
  min-height: 100vh;
  .layout-heard {
    z-index: 10000;
    height: 0;
    position: relative;
    .bg {
      z-index: 2;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 94px;
    }
    .heard-box {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 3;
      width: 100%;
      height: 86px;
      display: flex;
      flex-direction: row;
      .heard-title {
        height: 100%;
        width: 600px;
        display: flex;
        align-items: center;
        > img {
          margin-left: 30px;
        }
      }
      .heard-nas {
        flex: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        .nav-item {
          cursor: pointer;
          width: 175px;
          height: 47px;
          background-size: 100% 100%;
          font-family: "Microsoft YaHei";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          .nav-item-box {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            position: relative;

            .title {
              padding: 0 3px;
              display: flex;
              align-items: center;
              justify-content: center;

              height: 100%;
              flex: 1;
            }
            .image {
              flex-shrink: 0;
              width: 18%;
              text-align: left;
              > img {
                width: 10px;
                height: 6px;
              }
            }

            .sub-navs {
              position: absolute;
              bottom: -15px;
              left: 0;
              transform: translateY(100%);
              width: 160px;
              text-align: center;
              background: rgba(0, 69, 108, 0.95);
              border: 1px solid #5eb3e3;
              border-radius: 8px;
              .sub-nas-item {
                font-weight: 400 !important;
                height: 50px;
                line-height: 50px;
                transition: all 0.3s;
                &:hover {
                  background: rgba(173, 231, 241, 0.122);
                  transition: all 0.3s;
                }
              }
              .sub-nav-active {
                background: rgba(0, 0, 0, 0.2);
                transition: all 0.3s;
              }
            }
          }
        }
        .nav-action {
          background-size: 100% 100%;
          font-weight: 700;
        }
      }
      .heard-info {
        width: 400px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        .info-item {
          width: 160px;
          // background: #0d3d68;
          height: 86px;
          display: flex;
          flex-direction: column;
          align-items: self-start;
          justify-content: center;
          padding: 0 16px;
          position: relative;
          &::after {
            content: "";
            position: absolute;
            right: 0;
            top: 30px;
            width: 1px;
            height: 24px;
            background: rgba(255, 255, 255, 0.2);
          }
        }
        .info-item:first-child {
          align-items: self-end;
        }
        .info-item:last-child {
          width: 50px;
        }
        .datetime {
          .time {
            font-size: 18px;
            font-family: "DIN";
            margin-bottom: 3px;
          }
          .date {
            font-family: "DIN";
            font-size: 14px;
          }
        }
        .user-address {
          font-family: "Microsoft YaHei";
          font-size: 14px;
          .user {
            margin-bottom: 3px;
            .avatar {
              width: 20px;
              height: 20px;
              vertical-align: middle;
              margin-right: 4px;
            }
            > span {
            }
          }
          .address {
            .avatar {
              width: 16px;
              height: 16px;
              vertical-align: -15%;
              margin-right: 4px;
            }
            > span {
            }
          }
        }
        .out {
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          &::after {
            display: none;
          }
        }
      }
    }
  }

  .layout-content {
    overflow: hidden;
    height: 100vh;
    background: rgb(69, 110, 110);
    position: relative;

    .footer-navs {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 999;
      width: 820px;
      height: 48px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      .nav-item {
        cursor: pointer;
        height: 48px;
        width: 152px;
        background: rgba(7, 49, 80, 0.95);
        margin-right: 12px;
        text-align: center;
        line-height: 48px;
        color: #cfdfff;
        font-family: "庞门正道标题体";
        font-size: 20px;
        position: relative;
        &:last-child {
          margin-right: 0 !important;
        }
      }
      .nav-item-action {
        background: linear-gradient(to bottom, #0e3a75, #1ea9f8);

        color: #fff;
        &::after {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-size: 100% 100%;
          border: 1px solid;
          border-image: linear-gradient(to bottom, #43b8fa, #0d3d68) 1;
          box-sizing: border-box;
        }
      }
    }
  }
}
</style>
