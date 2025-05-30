<script lang="ts" setup>
import type {
  ConversationItem,
  ConversationMenuCommand
} from '@components/Conversations/types';

const conversationMenuItems1 = [
  {
    key: 'edit',
    label: '编辑',
    icon: '🍉',
    command: {
      self_id: '1',
      self_message: '编辑',
      self_type: 'text'
    }
  },
  {
    key: 'delete',
    label: '删除',
    icon: '🍎',
    disabled: true,
    divided: true
  },
  {
    key: 'share',
    label: '分享',
    icon: '🍆',
    command: 'share'
  }
];

function handleMenuCommand(
  command: ConversationMenuCommand,
  item: ConversationItem
) {
  ElMessage.success(`点击了菜单项：${command} ${item.label}`);
}

// 处理菜单点击
function handleMenuClick(menuKey: string, item: any) {
  switch (menuKey) {
    case 'edit':
      console.log(`编辑: ${item.label}`);
      ElMessage.warning(`编辑: ${item.label}`);
      break;
    case 'delete':
      console.log(`删除: ${item.label}`);
      ElMessage.error(`删除: ${item.label}`);
      break;
    case 'share':
      console.log(`分享: ${item.label}`);
      ElMessage.success(`分享: ${item.label}`);
      break;
  }
}
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 12px; height: 320px">
    <Conversations v-bind="$attrs" @menu-command="handleMenuCommand">
      <template #label="{ item }">
        <div class="custom-label">
          {{ item.label }}
        </div>
      </template>

      <template #groupTitle="{ group }">
        <div class="custom-group-title">
          <!-- 为不同组添加不同的前缀 -->
          <span v-if="group.title === '工作'">📊 </span>
          <span v-else-if="group.title === '学习'">📚 </span>
          <span v-else-if="group.title === '个人'">🏠 </span>
          <span v-else>📁 </span>
          {{ group.title }}
        </div>
      </template>

      <template
        #more-filled="{ item, isHovered, isActive, isMenuOpened, isDisabled }"
      >
        <span v-if="isHovered">✍️</span>
        <span v-if="isActive">✅</span>
        <span v-if="isMenuOpened">🥰</span>
        <span
          v-if="isDisabled"
          :style="{
            background: 'black',
            padding: '5px',
            borderRadius: '10px',
            color: 'white',
            fontSize: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }"
        >
          🫥是否禁用：{{ item?.disabled }}
        </span>
      </template>

      <template #menu="{ item }">
        <div class="menu-buttons">
          <div
            v-for="menuItem in conversationMenuItems1"
            :key="menuItem.key"
            class="menu-self-button"
            @click.stop="handleMenuClick(menuItem.key, item)"
          >
            <span v-if="menuItem.icon">{{ menuItem.icon }}</span>
            <span v-if="menuItem.label">{{ menuItem.label }}</span>
          </div>
        </div>
      </template>
    </Conversations>
  </div>
</template>

<style scoped lang="scss">
.custom-group-title {
  display: flex;
  align-items: center;
  font-weight: 500;
  color: #409eff;
}

.menu-buttons {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  padding: 12px;

  // 自定义菜单按钮-el-button样式
  .el-button {
    padding: 4px 8px;
    margin-left: 0;

    .el-icon {
      margin-right: 8px;
    }
  }

  // 自定义菜单按钮-自定义样式
  .menu-self-button {
    display: flex;
    padding: 4px 8px;
    align-items: center;
    border-radius: 5px;
    margin-left: 0;
    cursor: pointer;
    gap: 8px;

    &:hover {
      background-color: #f5f7fa;
      color: #409eff;
    }
  }
}

.custom-label {
  display: flex;
  align-items: center;
  // 溢出隐藏
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}
</style>
