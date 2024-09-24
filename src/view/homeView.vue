<template>
  <div ref="rightTable" class="table">
    <CustomTable
      ref="tableList"
      :table-data="tableData"
      :selectShow="false"
      :table-height="appManageHeight"
      @selection-change="handleSelectionChange"
    >
      <template #角色="{ scope }">
        <span>{{ scope.row.type == 0 ? "管理员" : "普通用户" }}</span>
      </template>
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
    },
    {
      title: "角色",
      prop: "type",
      custom: true,
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
.table {
  width: 1000px;
  height: 500px;
}
</style>
