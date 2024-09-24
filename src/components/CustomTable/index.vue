<template>
  <el-table
    ref="refTable"
    :data="tableData.data"
    :style="{ width: '100%', ...cellStyle }"
    :header-cell-style="headerCellStyle"
    :cell-style="cellStyle"
    :max-height="tableHeight"
    @selection-change="handleSelectionChange"
    @select="handleSelectChange"
    @select-all="handleSelectAllChange"
  >
    <el-table-column v-if="selectShow" type="selection" width="55" />
    <el-table-column v-if="sort" label="Top" align="center" width="100">
      <template v-slot="scope">
        <slot>{{ scope.$index + 1 }}</slot>
      </template>
    </el-table-column>
    <el-table-column
      v-for="item in tableData.titles"
      :key="item.prop"
      :prop="item.prop"
      :label="item.title"
      :width="item.width"
      show-overflow-tooltip
    >
      <template v-if="item.isBotton" v-slot="scope">
        <div style="display: flex; justify-content: space-between">
          <span style="padding-top: 7px">{{ scope.row[scope.column.property] }} </span>
          <div class="inner-btn" @click="resetFn(scope.row)">重置</div>
        </div>
      </template>
      <template v-else v-slot="scope">
        <span v-if="item.formatter"
          >{{
            item.formatter(
              scope.row,
              scope.column,
              scope.row[scope.column.property],
              scope.$index
            )
          }}
        </span>
        <span v-else
          >{{
            scope.row[scope.column.property] ? scope.row[scope.column.property] : "- -"
          }}
        </span>
      </template>
    </el-table-column>
    <slot name="actionColumn" />
  </el-table>
</template>
<script setup>
//暂无数据列表
let props = defineProps({
  // 表格数据以及表头数据
  tableData: {
    type: Object,
    default: () => {
      return {};
    },
  },
  // // 设置斑马纹的颜色
  // stripeColor: {
  //   type: String,
  //   default: "#fff",
  // },
  // 表格高度
  tableHeight: {
    type: Number,
    default: 500,
  },
  // 表头样式
  headerCellStyle: {
    type: Object,
    default: () => {
      return { color: "#232932", background: "#f5f5f5" };
    },
  },
  // 表格样式
  cellStyle: {
    type: Object,
    default: () => {
      return { color: "#646a73", background: "#f5f5f5" };
    },
  },
  // 是否显示选择栏
  selectShow: {
    type: Boolean,
    default: true,
  },
  // 是否显示index
  sort: {
    type: Boolean,
    default: false,
  },
});
let emit = defineEmits([
  "selectionChange",
  "delete",
  "selectChange",
  "selectAllChange",
  "resetFn",
]);

// 选中项发生改变
const handleSelectionChange = (selection) => {
  emit("selectionChange", selection);
};

// 手动触发勾选
const handleSelectChange = (selection, row) => {
  emit("selectChange", selection, row);
};

// 手动触发全选
const handleSelectAllChange = (selection) => {
  emit("selectAllChange", selection);
};

// 表格内按钮
const resetFn = (row) => {
  emit("resetFn", row);
};
const refTable = ref();
// 回显选中
const handleEcho = (echoData) => {
  clearSelection();
  if (echoData && echoData.length) {
    for (const row of echoData) {
      refTable.value.toggleRowSelection(row, true);
    }
  }
};
// 清空选择
const clearSelection = () => {
  refTable.value.clearSelection();
};
defineExpose({ handleEcho, clearSelection });
</script>

<style lang="scss" scoped>
.test-div {
  animation: fadeOut 500ms linear;
}

.inner-btn {
  width: 80px;
  height: 36px;
  cursor: pointer;
  text-align: center;
  line-height: 36px;
  color: #00d8f4;
  border-radius: 4px 4px 4px 4px;
  border: 1px solid #00d8f4;
  &:hover {
    background-color: #888585;
    color: #fff;
  }
}
::v-deep .el-table__header-wrapper {
  .has-gutter {
    color: #1d2129;
    th {
      background: #003b7a;
    }
    tr {
      background: #003b7a;
    }
  }
}

::v-deep .el-table__body {
  width: 100% !important;
}
::v-deep .el-table__footer {
  width: 100% !important;
}
::v-deep .el-table__header {
  width: 100% !important;
  border-bottom: 1px solid #031a3c;
}

::v-deep .el-table__empty-block {
  width: 100% !important;
}

::v-deep .cell.el-tooltip {
  width: 100% !important;
}

// 显示的颜色
::v-deep .el-table__body tr.el-table__row--striped td {
  background-color: #043272 !important;
}
::v-deep .el-table__row {
  background: #031a3c !important;
}

::v-deep .el-table__body tr:hover > td {
  background-color: #3d5e8d !important;
}

::v-deep .el-table--border,
.el-table--group {
  border: 1px solid #003b7a;
}

// 隐藏滚动条
::v-deep .el-table__body-wrapper {
  &::-webkit-scrollbar {
    // 整个滚动条
    width: 0 !important; // 纵向滚动条的宽度
    background: transparent;
    border: none;
  }

  &::-webkit-scrollbar-track {
    // 滚动条轨道
    border: none !important;
  }
  /* 滚动条轨道内部空白区域样式 */
  &::-webkit-scrollbar-track {
    background-color: transparent; /* 设置轨道背景色为浅灰色 */
  }
}
</style>
