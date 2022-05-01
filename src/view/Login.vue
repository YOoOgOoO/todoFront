<template>
    <el-table
      :data="tableData"
      style="width: 100%"
      show-header=false
      highlight-current-row=flase
      >
      <el-table-column
        prop="date"
        width="180"
        highlight-current-row=flase>
      </el-table-column>
      <el-table-column
        prop="name"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address">
      </el-table-column>
    </el-table>
  </template>

<script>
let Login = {
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}

export default Login
</script>
