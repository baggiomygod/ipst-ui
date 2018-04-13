
<!--  -->
<template>
  <div>
    <i-table
    :data="tableData3"
    height="250"
    border
    style="width: 100%">
    <i-table-column
      prop="date"
      label="日期"
      width="180">
    </i-table-column>
    <i-table-column
      prop="name"
      label="姓名"
      width="180">
    </i-table-column>
    <i-table-column
      prop="address"
      label="地址">
    </i-table-column>
  </i-table>
  </div>
</template>

<script>
export default {
    data() {
      return {
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    }
  }

</script>

