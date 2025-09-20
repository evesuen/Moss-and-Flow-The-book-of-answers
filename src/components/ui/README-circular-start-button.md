# Circular Start Button Component

一个完全可访问的圆形启动按钮组件，支持三种状态：regular / hover / active。

## 文件结构

```
src/
├── components/ui/
│   ├── circular-start-button.tsx          # React 组件
│   ├── circular-start-button-demo.tsx     # 使用演示
│   └── README-circular-start-button.md    # 说明文档
└── styles/
    └── circular-start-button.css          # 组件样式
```

## 特性

### ✅ 三种视觉状态
- **Regular**: 白色核心按钮 + 阴影
- **Hover**: 显示外环SVG，核心保持不变  
- **Active**: 核心背景变为 `#BBDDD2`，保持外环显示

### ✅ 严格视觉规格
- 核心按钮：`40px × 40px`，精确的阴影和圆角
- 外环：`81.519px × 81.519px`，使用提供的SVG
- 文字：Playfair Display字体，精确的阴影和间距

### ✅ 无障碍访问
- `<button>` 元素，支持键盘导航
- `aria-pressed` 状态管理
- `:focus-visible` 清晰描边
- 支持 Space/Enter 键触发

### ✅ 防白闪优化
- 外环使用 `opacity` 切换，不用 `display:none`
- `will-change: opacity, transform`
- `backface-visibility: hidden`
- `transform: translateZ(0)` 提前合成层

### ✅ 动效控制
- 支持 `prefers-reduced-motion`
- 仅使用 `opacity/transform` 过渡
- 250ms ease-out 动画

## 使用方法

### 基本用法

```tsx
import CircularStartButton from './components/ui/circular-start-button';
import './styles/circular-start-button.css';

function App() {
  const handleToggle = (isPressed: boolean) => {
    console.log('Button pressed:', isPressed);
  };

  return (
    <CircularStartButton
      onToggle={handleToggle}
      ariaLabel="Start application"
    />
  );
}
```

### 高级用法

```tsx
<CircularStartButton
  onToggle={(isPressed) => {
    if (isPressed) {
      startApplication();
    } else {
      stopApplication();
    }
  }}
  initialPressed={false}
  disabled={false}
  className="custom-button"
  ariaLabel="Start or stop the application"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onToggle` | `(isPressed: boolean) => void` | - | 状态切换回调函数 |
| `initialPressed` | `boolean` | `false` | 初始按下状态 |
| `disabled` | `boolean` | `false` | 是否禁用按钮 |
| `className` | `string` | `''` | 额外的CSS类名 |
| `ariaLabel` | `string` | `'Start application'` | 无障碍标签 |

## 演示

要查看完整的演示，可以使用 `CircularStartButtonDemo` 组件：

```tsx
import { CircularStartButtonDemo } from './components/ui/circular-start-button-demo';

function App() {
  return <CircularStartButtonDemo />;
}
```

## 样式定制

组件使用CSS变量，可以轻松定制颜色：

```css
:root {
    --btn-bg: #FFFFFF;           /* 默认背景色 */
    --btn-bg-active: #BBDDD2;    /* 激活背景色 */
    --ring-stroke: #FDFEFD;      /* 外环颜色 */
    --text-color: #FDFEFD;       /* 文字颜色 */
    --shadow-color: rgba(67, 137, 114, 0.20); /* 阴影颜色 */
}
```

## 键盘导航

- **Tab**: 聚焦到按钮
- **Space**: 激活按钮
- **Enter**: 激活按钮
- **Escape**: 取消焦点（浏览器默认行为）

## 浏览器支持

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## 注意事项

1. 确保在页面中引入 Playfair Display 字体
2. 组件需要深色背景才能正确显示
3. 外环SVG使用了复杂的滤镜效果，在某些旧浏览器中可能显示不同
4. 组件完全独立，不依赖任何外部库或框架
