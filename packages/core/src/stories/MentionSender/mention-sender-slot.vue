<script lang="ts" setup>
import type { TriggerEvent } from '@components/EditorSender/types';
import { CircleClose, Delete, Position } from '@element-plus/icons-vue';
import { MentionSender } from '../../components';

const senderRef = ref<InstanceType<typeof MentionSender>>();

const showHeaderFlog = ref(false);

const valueStr = computed(() => senderRef.value?.$props.modelValue);

onMounted(() => {
  showHeaderFlog.value = true;
  senderRef.value?.openHeader();
});

function blur() {
  senderRef.value?.blur();
}

function focus(type = 'all') {
  senderRef.value?.focus(type);
}
function openCloseHeader() {
  if (!showHeaderFlog.value) {
    senderRef.value?.openHeader();
  } else {
    senderRef.value?.closeHeader();
  }
  showHeaderFlog.value = !showHeaderFlog.value;
}

function closeHeader() {
  showHeaderFlog.value = false;
  senderRef.value?.closeHeader();
}

function handleSubmit(value: string) {
  ElMessage.success(`点击了Submit ${value}`);
}
function handleCancel() {
  ElMessage.success(`点击了Cancel`);
}

function handleTrigger(value: TriggerEvent) {
  ElMessage.success(
    `Trigger ${value.oldValue}, ${value.newValue}, ${value.isOpen}`
  );
}
function handleRecordingChange() {
  ElMessage.success(`RecordingChange`);
}
</script>

<template>
  <div class="sender-wrapper">
    <div class="content">
      <div style="display: flex">
        <el-button
          type="primary"
          style="width: fit-content"
          @click="senderRef?.clear()"
        >
          使用组件实例清空
        </el-button>
        <el-button
          type="primary"
          style="width: fit-content"
          :disabled="!valueStr"
          @click="senderRef?.submit()"
        >
          使用组件实例提交
        </el-button>
        <el-button
          type="primary"
          style="width: fit-content"
          @click="senderRef?.cancel()"
        >
          使用组件实例取消
        </el-button>
      </div>
      <br />
      <div style="display: flex">
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
          失去焦点
        </el-button>
      </div>
      <br />
      <MentionSender
        v-bind="$attrs"
        ref="senderRef"
        @submit="handleSubmit"
        @cancel="handleCancel"
        @trigger="handleTrigger"
        @recording-change="handleRecordingChange"
      >
        <!-- 自定义操作列表 -->
        <template #action-list>
          <div class="action-list-self-wrap">
            <el-button type="danger" circle>
              <el-icon><Delete /></el-icon>
            </el-button>

            <el-button type="primary" circle style="rotate: -45deg">
              <el-icon><Position /></el-icon>
            </el-button>
          </div>
        </template>
        <template #header>
          <div class="header-self-wrap">
            <div class="header-self-title">
              <div class="header-left">💯 欢迎使用 Element Plus X</div>
              <div class="header-right">
                <el-button @click.stop="closeHeader">
                  <el-icon><CircleClose /></el-icon>
                  <span>关闭头部</span>
                </el-button>
              </div>
            </div>
            <div class="header-self-content">🦜 自定义头部内容</div>
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

        <!-- 自定义 底部插槽 -->
        <template #footer>
          <div
            style="
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 12px;
            "
          >
            默认变体 自定义底部
          </div>
        </template>
      </MentionSender>
    </div>
  </div>
</template>

<style scoped lang="less">
.sender-wrapper {
  width: 100%;
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    width: 800px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}
.header-self-wrap {
  display: flex;
  flex-direction: column;
  padding: 16px;
  height: 200px;
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

.is-loading {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
