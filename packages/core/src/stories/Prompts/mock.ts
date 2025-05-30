import type { PromptsItemsProps } from '@components/Prompts/types';

export const mockPromptsItems: PromptsItemsProps[] = [
  {
    key: '1',
    label: '🐛 提示集组件标题',
    description: '描述信息'.repeat(3)
  },
  {
    key: '2',
    label: '🐛 我是被禁用的',
    disabled: true
  },
  {
    key: '3',
    label: '🐛 提示集组件标题'
  },
  {
    key: '4',
    label: '🐛 提示集组件标题'
  }
];

export const CustomStyleItems: PromptsItemsProps[] = [
  {
    key: '1',
    label: '🐛 提示集组件标题',
    description: '描述信息'.repeat(3),
    itemStyle: { width: 'calc(50% - 6px)', transition: 'background .3s' },
    itemHoverStyle: {
      background:
        'linear-gradient(to bottom right, rgba(223, 59, 61, 0.9), rgba(203, 52, 244, 0.9)'
    },
    itemActiveStyle: {
      background:
        'linear-gradient(to bottom right, rgba(58, 32, 164, 0.9), rgba(254, 166, 223, 0.9)'
    }
  },
  {
    key: '2',
    label: '🐛 我是被禁用的',
    disabled: true,
    itemStyle: { width: 'calc(50% - 6px)', transition: 'background .3s' },
    itemHoverStyle: {
      background:
        'linear-gradient(to bottom right, rgba(223, 59, 61, 0.9), rgba(203, 52, 244, 0.9)'
    },
    itemActiveStyle: {
      background:
        'linear-gradient(to bottom right, rgba(58, 32, 164, 0.9), rgba(254, 166, 223, 0.9)'
    }
  },
  {
    key: '3',
    label: '🐛 单个禁用控制更准确',
    disabled: true,
    itemStyle: { width: 'calc(50% - 6px)', transition: 'background .3s' },
    itemHoverStyle: {
      background:
        'linear-gradient(to bottom right, rgba(223, 59, 61, 0.9), rgba(203, 52, 244, 0.9)'
    },
    itemActiveStyle: {
      background:
        'linear-gradient(to bottom right, rgba(58, 32, 164, 0.9), rgba(254, 166, 223, 0.9)'
    }
  },
  {
    key: '4',
    label: '🐛 提示集组件标题',
    itemStyle: { width: 'calc(50% - 6px)', transition: 'background .3s' },
    itemHoverStyle: {
      background:
        'linear-gradient(to bottom right, rgba(223, 59, 61, 0.9), rgba(203, 52, 244, 0.9)'
    },
    itemActiveStyle: {
      background:
        'linear-gradient(to bottom right, rgba(58, 32, 164, 0.9), rgba(254, 166, 223, 0.9)'
    }
  }
];

export const WithChildrenItems: PromptsItemsProps[] = Array.from({
  length: 3
}).map((_, index) => ({
  key: index,
  label: `🐠 主标题 ${index}`,
  description: `描述 ${index}`,
  disabled: false,
  itemStyle: {
    width: `calc(100% / ${3} - 43px)`,
    backgroundImage: `linear-gradient(137deg, #e5f4ff 0%, #efe7ff 100%)`
  },
  itemHoverStyle: {
    cursor: 'unset'
  },

  children: [
    {
      key: `${index}-1`,
      label: `🐛 子标题 ${index}-1`,
      description: `描述 ${index}`,
      disabled: false,
      itemStyle: {
        backgroundImage: `linear-gradient(137deg, #e5f4ff 0%, #efe7ff 100%)`,
        border: '1px solid #FFF'
      },
      itemHoverStyle: {
        cursor: 'unset'
      },
      children: [
        {
          key: `${index}-1-1`,
          label: `🐛 孙子标题 ${index}-1-1`,
          description: `描述 ${index}`,
          disabled: false,
          itemStyle: {
            background: 'rgba(255,255,255,0.45)',
            border: '1px solid #FFF'
          }
        },
        {
          key: `${index}-1-2`,
          label: `🐛 孙子标题 ${index}-1-1`,
          description: `描述 ${index}`,
          disabled: false,
          itemStyle: {
            background: 'rgba(255,255,255,0.45)',
            border: '1px solid #'
          }
        },
        {
          key: `${index}-1-3`,
          label: `🐛 孙子标题 ${index}-1-1`,
          description: `描述 ${index}`,
          disabled: false,
          itemStyle: {
            background: 'rgba(255,255,255,0.45)',
            border: '1px solid #FFF'
          }
        }
      ]
    },
    {
      key: `${index}-2`,
      label: `🐛 子标题 ${index}-2`,
      description: `描述 ${index}`,
      disabled: false,
      itemStyle: {
        background: 'rgba(255,255,255,0.45)',
        border: '1px solid #FFF'
      }
    },
    {
      key: `${index}-3`,
      label: `🐛 子标题 ${index}-3`,
      description: `描述 ${index}`,
      disabled: false,
      itemStyle: {
        background: 'rgba(255,255,255,0.45)',
        border: '1px solid #FFF'
      }
    }
  ]
}));
