<template>
  <div id="app">
    <i-input size="big" v-model="name"></i-input>
    <i-switch v-model="value1" on-text="" off-text=""></i-switch>
    <div>
      <i-input-number v-model="num1" @change="handleChange" :min="1" :max="10"></i-input-number>
    </div>
    <div>
      <i-select v-model="value" placeholder="请选择">
        <i-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </i-option>
      </i-select>
    </div>
    <div>
    <i-time-select
        v-model="value2"
        :picker-options="{
          start: '08:30',
          step: '00:15',
          end: '18:30'
        }"
        placeholder="选择时间">
      </i-time-select>
  </div>
  <h3>element ui</h3>
  <div>
      <el-select v-model="value" placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    </div>
  </div>

</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "ipst",
      value1: true,
      num1: 1,
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      value2:''
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
