<template>
  <div ref="rightTable" class="table">
    <ContentTitle title="首页">
      <div class="agent-container padding-top-20">
        <CustomTable
          ref="tableList"
          :table-data="tableData"
          :selectShow="false"
          :table-height="appManageHeight"
          @resetFn="handleReset"
          @selection-change="handleSelectionChange"
        >
          <template v-slot:actionColumn>
            <el-table-column label="操作" align="center" width="200">
              <template v-slot="{ row }">
                <span class="pointer mlr10" @click="handleEdit(row)">编辑</span>
                <span class="pointer red mlr10" @click="handleDel(row)">删除</span>
              </template>
            </el-table-column>
          </template>
        </CustomTable>
      </div>
    </ContentTitle>
  </div>
</template>

<script setup>
import { debounce } from "lodash";

const tableData = reactive({
  data: [
    {
      nickName: "张三",
      username: "zhangsan",
      type: 0,
      orgName: "华为",
    },
    {
      nickName: "李四",
      username: "lisi",
      type: 1,
      orgName: "腾讯",
    },
    {
      nickName: "王五",
      username: "wangsu",
      type: 1,
      orgName: "阿里",
    },
    {
      nickName: "赵六",
      username: "zhaoliu",
      type: 0,
      orgName: "京东",
    },
  ],
  titles: [
    {
      title: "用户",
      prop: "nickName",
    },
    {
      title: "登录账号",
      prop: "username",
      isBotton: true,
    },
    {
      title: "角色",
      prop: "type",
      formatter: (row) => {
        return row.type == 0 ? "管理员" : "普通用户";
      },
    },
    {
      title: "所属企业",
      prop: "orgName",
    },
  ],
});

const handleEdit = () => {
  console.log("编辑 :>> ", "编辑");
};
const handleDel = () => {
  console.log("del :>> ", "del");
};
// 表格内按钮
const handleReset = (row) => {
  console.log("resetFn :>> ", row);
};
// 选中项发生改变
const handleSelectionChange = debounce((val) => {
  console.log("val---", val);
}, 100);

const rightTable = ref();
const appManageHeight = ref(0);

onMounted(() => {
  appManageHeight.value = rightTable.value ? rightTable.value.clientHeight - 50 : 500;
});
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.table {
  margin: 100px auto;
}
</style>
