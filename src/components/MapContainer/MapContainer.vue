<template>
  <div class="drawStation">
    <div class="input">
      <el-form-item class="is-required">
        <!-- 地图主体 -->
        <div id="container"></div>
        <div class="search">
          <el-input
            style="min-width: 600px"
            v-model="addrrs"
            class="gh-serach-icon-input"
            type="text"
            placeholder="请输入地址"
            clearable
            ><el-button
              slot="append"
              type="primary"
              icon="el-icon-search"
              @click="onSearch"
          /></el-input>
        </div>
        <div class="location">
          <p class="tips">
            鼠标点击地图可获取经度、纬度数据，点击确认按钮自动填充表单数据。
          </p>

          <span>经度：</span>
          <el-input
            style="width: 150px !important"
            v-model="location.lng"
            :disabled="true"
            size="small"
          ></el-input>
          <span>纬度：</span>
          <el-input
            style="width: 150px !important"
            v-model="location.lat"
            :disabled="true"
            size="small"
          ></el-input>
        </div>
      </el-form-item>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DrawStation",
  data() {
    return {
      // 地图对象
      AMap: null,
      id: this.$route.query.id || null,
      facilityLocation: null,
      // 地图实例对象
      map: null,
      // 经纬度
      location: {
        lat: "",
        lng: "",
      },
      // 搜索输入
      addrrs: "",
      tipinput: "",
      auto: null,
      placeSearch: null,
    };
  },
  mounted() {
    //DOM初始化完成进行地图初始化
    this.initData();
  },
  methods: {
    onSearch() {
      let that = this;
      AMap.plugin("AMap.Geocoder", function () {
        var geocoder = new AMap.Geocoder({
          // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
          city: that.addrrs,
        });
        geocoder.getLocation(that.addrrs, function (status, result) {
          if (status === "complete" && result.info === "OK") {
            // result中对应详细地理坐标信息
            let arr = [];
            arr.push(result.geocodes[0].location.lng);
            arr.push(result.geocodes[0].location.lat);
            that.map.setCenter(arr);
          } else {
            that.$message.error("无效地址");
          }
        });
      });
    },
    initData() {
      this.$nextTick(() => {
        // 地图
        this.map = new AMap.Map("container", {
          zoom: 13,
        });
        setTimeout(() => {
          this.map = new AMap.Map("container", {
            zoom: 13,
            center: [120.320222, 32.869379], //初始化地图中心点位置
          });
          // console.log(arr);
          // 点击
          let that = this;
          this.map.addControl(new AMap.MapType());
          this.map.on("click", (ev) => {
            // 触发事件的地理坐标，AMap.LngLat 类型
            // 触发事件的对象
            var lnglat = ev.lnglat;
            this.location = lnglat;
            // 经纬度
            AMap.plugin("AMap.Geocoder", function () {
              var geocoder = new AMap.Geocoder({});
              var lnglat2 = [lnglat.lng, lnglat.lat];
              geocoder.getAddress(lnglat2, (status, result) => {
                if (status === "complete" && result.info === "OK") {
                  // result为对应的地理位置详细信息
                  let obj = {
                    address: result.regeocode.formattedAddress,
                    lon: lnglat.lng,
                    lat: lnglat.lat,
                  };
                  that.map.clearMap();
                  that.$nextTick(() => {
                    var marker = new AMap.Marker({
                      position: new AMap.LngLat(lnglat.lng, lnglat.lat),
                      icon: require("@/imgs/map.png"),
                      offset: new AMap.Pixel(-13, -30),
                    });
                    that.map.add(marker);
                  });
                  that.addrrs = result.regeocode.formattedAddress;
                  that.$emit("address", obj);
                }
              });
            });
          });
        }, 1);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.drawStation {
  #container {
    padding: 0px;
    margin: 0px;
    min-width: 958px;
    height: 500px;
    margin-top: 30px;
  }

  .search {
    position: absolute;
    top: 50px;
    left: 20px;
  }

  .location {
    position: absolute;
    display: flex;
    top: -20px;
    right: 0px;
    span {
      width: 60px;
      margin-left: 10px;
      text-align: right;
    }
  }
}
</style>
