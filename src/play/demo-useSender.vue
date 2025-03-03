<!-- home 首页 - 使用 BubbleList 组件 -->
<template>
  <div class="component-container">
    <div class="top-wrap">
      <div class="btn-list">
        <el-button dark type="success" plain @click="focus('start')">
          文本最前方
        </el-button>
        <el-button dark type="success" plain @click="focus('end')">
          文本最后方
        </el-button>
        <el-button dark type="success" plain @click="focus('all')">
          整个文本
        </el-button>
        <el-button dark type="success" plain @click="blur">
          取消焦点
        </el-button>
      </div>
    </div>

    <div class="component-1">
      <Sender
        ref="senderRef"
        allowSpeech
        clearable
        submitType="shiftEnter"
        v-model:value="value"
        @submit="submit"
        :placeholder="'自定义 placeholder'"
        :loading="loading"
      >
        <!-- 自定义头部 -->
        <template #header>
          <div class="header-self-wrap">
            <div class="header-self-title">
              <div class="header-left">自定义头部标题</div>
              <div class="header-right">
                <el-button @click.stop="closeHeader">
                  <el-icon><CircleClose /></el-icon>
                  <span>关闭头部</span>
                </el-button>
              </div>
            </div>
            <div class="header-self-content">自定义头部内容</div>
          </div>
        </template>

        <!-- 自定义前缀 -->
        <template #prefix>
          <div class="prefix-self-wrap">
            <el-button dark>
              <el-icon><Link /></el-icon>
              <span>自定义前缀</span>
            </el-button>

            <el-button color="#626aef" :dark="true" @click="openCloseHeader">
              打开/关闭头部
            </el-button>
          </div>
        </template>

        <!-- 自定义操作列表 -->
        <!-- <template #action-list>
          <div class="action-list-self-wrap">
            <span>自定义操作列表</span>
            <el-button dark type="success" plain @click="focus('start')"
              >文本最前方</el-button
            >
            <el-button dark type="success" plain @click="focus('end')"
              >文本最后方</el-button
            >
            <el-button dark type="success" plain @click="focus('all')"
              >整个文本</el-button
            >
            <el-button dark type="success" plain @click="blur"
              >取消焦点</el-button
            >
          </div>
        </template> -->
      </Sender>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Sender from "@/components/Sender/index.vue";
import { CircleClose, Link } from "@element-plus/icons-vue";

const senderRef = ref();
const value = ref("");
const loading = ref(false);
const showHeaderFlog = ref(false);

function openCloseHeader() {
  if (!showHeaderFlog.value) {
    senderRef.value.openHeader();
  } else {
    senderRef.value.closeHeader();
  }
  showHeaderFlog.value = !showHeaderFlog.value;
}

function closeHeader() {
  showHeaderFlog.value = false;
  senderRef.value.closeHeader();
}

function submit() {
  console.log("submit 提交参数", value.value);
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    value.value = "自定义提交后的操作===> 提交成功";
  }, 2000);
}

function blur() {
  senderRef.value.blur();
}

function focus(type = "all") {
  senderRef.value.focus(type);
}
</script>

<style scoped lang="scss">
.component-container {
  width: fit-content;
  height: calc(100vh - 64px);
  padding: 12px;
  // background-color: aquamarine;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  // overflow: auto;

  .top-wrap {
    margin: 12px 0;
  }

  .component-1 {
    .header-self-wrap {
      display: flex;
      flex-direction: column;
      padding: 16px;
      height: 200px;
      width: 1300px;
      .header-self-title {
        width: 100%;
        display: flex;
        height: 30px;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 8px;
      }
      .header-self-content {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        color: #626aef;
        font-weight: 600;
      }
    }

    .prefix-self-wrap {
      display: flex;
    }

    .action-list-self-wrap {
      display: flex;
      align-items: center;
      & > span {
        width: 120px;
        font-weight: 600;
        color: var(--el-color-primary);
      }
    }
  }
}
</style>
