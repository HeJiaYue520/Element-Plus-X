<script setup lang="ts">
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { nextTick, onMounted, ref } from 'vue';

gsap.registerPlugin(ScrollTrigger);

const features = ref([
  {
    title: '现代设计',
    desc: '基于最新设计规范，提供美观且一致的用户界面组件',
    icon: '🎨'
  },
  {
    title: '高性能',
    desc: '优化的组件架构，确保应用快速响应和流畅体验',
    icon: '⚡'
  },
  {
    title: '易于使用',
    desc: '简洁的API设计，让开发者能够快速上手和集成',
    icon: '🔧'
  },
  {
    title: '响应式',
    desc: '完美适配各种屏幕尺寸，提供一致的跨设备体验',
    icon: '📱'
  },
  {
    title: '主题定制',
    desc: '灵活的主题系统，支持深色模式和自定义样式',
    icon: '🌙'
  },
  {
    title: '类型安全',
    desc: '完整的TypeScript支持，提供更好的开发体验',
    icon: '🔒'
  }
]);

const sponsors = ref([
  {
    name: '金牌赞助商',
    logo: '🏆',
    company: 'TechCorp',
    level: 'gold'
  },
  {
    name: '银牌赞助商',
    logo: '🥈',
    company: 'DevStudio',
    level: 'silver'
  },
  {
    name: '铜牌赞助商',
    logo: '🥉',
    company: 'CodeLab',
    level: 'bronze'
  }
]);

const reviews = ref([
  {
    id: 1,
    name: '张开发',
    avatar: '👨‍💻',
    role: '前端工程师',
    company: '阿里巴巴',
    rating: 5,
    content:
      'Element Plus X 真的太好用了！组件设计精美，API 设计合理，大大提升了我们团队的开发效率。特别是暗黑模式的支持，非常贴心。',
    date: '2024-01-15',
    likes: 128
  },
  {
    id: 2,
    name: 'Sarah Chen',
    avatar: '👩‍🎨',
    role: 'UI/UX 设计师',
    company: '腾讯',
    rating: 5,
    content:
      '作为设计师，我对这个组件库的视觉效果非常满意。每个组件都经过精心设计，符合现代审美标准。',
    date: '2024-01-12',
    likes: 95
  },
  {
    id: 3,
    name: '李全栈',
    avatar: '🧑‍💼',
    role: '技术总监',
    company: '字节跳动',
    rating: 5,
    content:
      'TypeScript 支持非常完善，代码提示很准确。我们整个团队都在使用，项目质量有了明显提升。强烈推荐！',
    date: '2024-01-10',
    likes: 156
  },
  {
    id: 4,
    name: 'Mike Johnson',
    avatar: '👨‍🔬',
    role: '高级开发者',
    company: 'Microsoft',
    rating: 4,
    content:
      '组件库功能丰富，文档详细。唯一的建议是希望能增加更多的自定义主题选项。',
    date: '2024-01-08',
    likes: 73
  },
  {
    id: 5,
    name: '王产品',
    avatar: '👩‍💻',
    role: '产品经理',
    company: '美团',
    rating: 5,
    content:
      '从产品角度来看，这个组件库的用户体验设计得很好，各种交互细节都考虑得很周到。',
    date: '2024-01-05',
    likes: 89
  },
  {
    id: 6,
    name: 'Anna Smith',
    avatar: '👩‍🚀',
    role: '前端架构师',
    company: 'Google',
    rating: 5,
    content:
      '性能优化做得很好，打包体积控制得不错。按需导入功能很实用，减少了不少冗余代码。',
    date: '2024-01-03',
    likes: 142
  },
  {
    id: 7,
    name: '刘创业',
    avatar: '🧑‍💼',
    role: '创始人',
    company: '初创公司',
    rating: 5,
    content:
      '对于我们这种小团队来说，Element Plus X 简直是神器！快速搭建原型，节省了大量开发时间。',
    date: '2024-01-01',
    likes: 67
  },
  {
    id: 8,
    name: 'David Wilson',
    avatar: '👨‍🎓',
    role: '学生开发者',
    company: '清华大学',
    rating: 4,
    content:
      '学习 Vue 3 的时候发现了这个库，文档写得很清楚，示例代码也很详细，对新手很友好。',
    date: '2023-12-28',
    likes: 45
  }
]);

const installCommand = ref('npm install element-plus-x');

async function copyInstallCommand() {
  try {
    await navigator.clipboard.writeText(installCommand.value);
    // 可以添加复制成功的提示
  } catch (err) {
    console.error('复制失败:', err);
  }
}

onMounted(async () => {
  await nextTick();

  // 简单的统计数字动画
  gsap.utils.toArray('.stat-number').forEach((number: any) => {
    const finalText = number.textContent;
    const numValue = Number.parseInt(finalText.replace(/\D/g, '')) || 0;

    gsap.fromTo(
      number,
      {
        textContent: 0
      },
      {
        textContent: numValue,
        duration: 2,
        ease: 'power2.out',
        snap: { textContent: 1 },
        onUpdate() {
          const current = Math.round(number.textContent);
          if (finalText.includes('+')) {
            number.textContent = `${current}+`;
          } else if (finalText.includes('%')) {
            number.textContent = `${current}%`;
          } else {
            number.textContent = current;
          }
        }
      }
    );
  });

  // 简单的页面加载动画
  gsap
    .timeline()
    .from('.hero-badge', {
      y: -30,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out'
    })
    .from(
      '.hero-title',
      {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      },
      '-=0.3'
    )
    .from(
      '.hero-subtitle',
      {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      },
      '-=0.3'
    )
    .from(
      '.hero-features',
      {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      },
      '-=0.3'
    )
    .from(
      '.hero-actions',
      {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      },
      '-=0.3'
    )
    .from(
      '.hero-stats',
      {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      },
      '-=0.3'
    )
    .from(
      '.hero-visual',
      {
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
      },
      '-=0.4'
    );
});
</script>

<template>
  <div class="page-container">
    <!-- 顶部横幅广告 -->
    <section class="hero-banner">
      <div class="banner-content">
        <div class="banner-icon">🚀</div>
        <div class="banner-text">
          <span class="banner-main"
            >推出仿豆包/通义，企业级AI-PC端应用模版，助力企业快速搭建-全栈AI项目</span
          >
        </div>
        <a href="https://chat.element-plus-x.com/chat" class="banner-cta">
          <span class="cta-text">X Chat</span>
          <span class="cta-arrow">→</span>
        </a>
      </div>
    </section>

    <!-- 首屏英雄区 -->
    <section class="hero-section">
      <!-- 背景装饰 -->
      <div class="hero-background">
        <div class="gradient-orb orb-1" />
        <div class="gradient-orb orb-2" />
        <div class="grid-pattern" />
      </div>

      <!-- 主内容区域 -->
      <div class="hero-container">
        <!-- 左侧内容 -->
        <div class="hero-content">
          <!-- 徽章 -->
          <div class="hero-badge">
            <span class="badge-icon">✨</span>
            <span class="badge-text">ELEMENT PLUS X</span>
            <span class="badge-version">v2.0</span>
          </div>

          <!-- 主标题 -->
          <h1 class="hero-title">
            <span class="title-line">构建未来</span>
            <span class="title-line">UI 体验</span>
          </h1>

          <!-- 副标题 -->
          <p class="hero-subtitle">
            基于 Vue 3 的下一代组件库，融合 Linear
            设计语言与玻璃拟态美学，为现代 Web 应用提供极致的用户体验
          </p>

          <!-- 特性标签 -->
          <div class="hero-features">
            <div class="feature-tag">
              <span class="feature-icon">⚡</span>
              <span class="feature-text">极速开发</span>
            </div>
            <div class="feature-tag">
              <span class="feature-icon">🎨</span>
              <span class="feature-text">现代设计</span>
            </div>
            <div class="feature-tag">
              <span class="feature-icon">🔒</span>
              <span class="feature-text">类型安全</span>
            </div>
          </div>

          <!-- 行动按钮 -->
          <div class="hero-actions">
            <button class="btn-primary">
              <span class="btn-icon">🚀</span>
              <span class="btn-text">立即开始</span>
            </button>
            <button class="btn-secondary">
              <span class="btn-icon">📖</span>
              <span class="btn-text">查看文档</span>
            </button>
          </div>

          <!-- 统计数据 -->
          <div class="hero-stats">
            <div class="stat-item">
              <div class="stat-number">50+</div>
              <div class="stat-label">组件</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">10K+</div>
              <div class="stat-label">下载量</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">99%</div>
              <div class="stat-label">满意度</div>
            </div>
          </div>
        </div>

        <!-- 右侧视觉 -->
        <div class="hero-visual">
          <!-- 主要Logo展示 -->
          <div class="logo-showcase">
            <div class="logo-main">
              <div class="logo-circle">
                <span class="logo-text">X</span>
                <div class="logo-ring ring-1" />
                <div class="logo-ring ring-2" />
                <div class="logo-ring ring-3" />
              </div>
            </div>

            <!-- 浮动装饰点 -->
            <div class="floating-dots">
              <div class="dot dot-1" />
              <div class="dot dot-2" />
              <div class="dot dot-3" />
              <div class="dot dot-4" />
              <div class="dot dot-5" />
              <div class="dot dot-6" />
            </div>
          </div>

          <!-- 技术栈卡片 -->
          <div class="tech-stack-cards">
            <div class="tech-card">
              <div class="tech-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M2,3H22L20,21L12,24L4,21L2,3M6.6,7L6.4,9.3H15.7L15.5,11.6H8.1L7.9,13.9H15.3L14.9,17.3L12,18.2L9.1,17.3L8.9,15.3H6.6L7,19.3L12,21L17,19.3L18,7H6.6Z"
                  />
                </svg>
              </div>
              <span class="tech-name">Vue 3</span>
            </div>

            <div class="tech-card">
              <div class="tech-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M1.125,0C0.502,0,0,0.502,0,1.125v21.75C0,23.498,0.502,24,1.125,24h21.75c0.623,0,1.125-0.502,1.125-1.125V1.125C24,0.502,23.498,0,22.875,0H1.125z M17.363,8.625H8.637v1.5h8.726V8.625z M17.363,11.625H8.637v1.5h8.726V11.625z M17.363,14.625H8.637v1.5h8.726V14.625z"
                  />
                </svg>
              </div>
              <span class="tech-name">TypeScript</span>
            </div>

            <div class="tech-card">
              <div class="tech-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M14.315 0L12 2.315L9.685 0L8.371 1.314L10.686 3.629L8.371 5.943L9.685 7.257L12 4.943L14.315 7.257L15.629 5.943L13.314 3.629L15.629 1.314L14.315 0Z"
                  />
                </svg>
              </div>
              <span class="tech-name">Vite</span>
            </div>

            <div class="tech-card">
              <div class="tech-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                  />
                </svg>
              </div>
              <span class="tech-name">Linear</span>
            </div>
          </div>

          <!-- 代码预览窗口 -->
          <div class="code-preview">
            <div class="code-header">
              <div class="code-dots">
                <span class="dot red" />
                <span class="dot yellow" />
                <span class="dot green" />
              </div>
              <span class="code-title">App.vue</span>
            </div>
            <div class="code-content">
              <div class="code-line">
                <span class="line-number">1</span>
                <span class="code-text"
                  ><span class="tag">&lt;template&gt;</span></span
                >
              </div>
              <div class="code-line">
                <span class="line-number">2</span>
                <span class="code-text">
                  <span class="tag">&lt;ElButton</span>
                  <span class="attr">type</span>=<span class="string"
                    >"primary"</span
                  ><span class="tag">&gt;</span></span
                >
              </div>
              <div class="code-line">
                <span class="line-number">3</span>
                <span class="code-text"> Hello Element Plus X</span>
              </div>
              <div class="code-line">
                <span class="line-number">4</span>
                <span class="code-text">
                  <span class="tag">&lt;/ElButton&gt;</span></span
                >
              </div>
              <div class="code-line">
                <span class="line-number">5</span>
                <span class="code-text"
                  ><span class="tag">&lt;/template&gt;</span></span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 快速开始区域 -->
    <section class="quickstart-section">
      <div class="quickstart-container">
        <div class="quickstart-content">
          <p class="quickstart-description">
            Element Plus X 是基于 Vue 3
            的现代化组件库，提供丰富的组件和优雅的设计，
            帮助您快速构建美观且功能强大的 Web 应用程序。
          </p>

          <div class="quickstart-actions">
            <div class="install-command">
              <span class="command-prefix">$</span>
              <span class="command-text">{{ installCommand }}</span>
              <button class="command-copy" @click="copyInstallCommand">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path
                    d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 赞助与支持区域 - 紧凑设计 -->
    <section class="support-section">
      <div class="support-container">
        <!-- 紧凑的标题区域 -->
        <div class="support-header">
          <h2 class="support-title">感谢支持</h2>
          <p class="support-subtitle">他们的支持让开源项目持续发展</p>
        </div>

        <!-- 玻璃拟态赞助商卡片 -->
        <div class="sponsors-glass-card">
          <!-- 赞助商列表 - 水平布局 -->
          <div class="sponsors-list">
            <div
              v-for="sponsor in sponsors.slice(0, 6)"
              :key="sponsor.company"
              class="sponsor-compact"
            >
              <div class="sponsor-avatar">
                {{ sponsor.logo }}
              </div>
              <div class="sponsor-name">
                {{ sponsor.company }}
              </div>
            </div>
          </div>

          <!-- 更多赞助商指示器 -->
          <div class="more-sponsors">
            <span class="more-text">+{{ sponsors.length - 6 }} 更多赞助商</span>
          </div>
        </div>

        <!-- 紧凑的CTA区域 -->
        <div class="sponsor-cta-compact">
          <div class="cta-content">
            <div class="cta-left">
              <div class="cta-icon">🤝</div>
              <div class="cta-text">
                <h3 class="cta-title">成为赞助商</h3>
                <p class="cta-desc">支持开源项目，获得品牌曝光</p>
              </div>
            </div>
            <button class="sponsor-btn-compact">
              <span class="btn-text">立即赞助</span>
              <span class="btn-arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- 特性区域 -->
    <main class="features-area">
      <h2 class="features-title">特性</h2>
      <div class="features-grid">
        <div v-for="(feature, i) in features" :key="i" class="feature-card">
          <div class="feature-icon">
            {{ feature.icon }}
          </div>
          <h3 class="feature-title">
            {{ feature.title }}
          </h3>
          <p class="feature-desc">
            {{ feature.desc }}
          </p>
          <div class="feature-glow" />
        </div>
      </div>
    </main>

    <!-- 社区评价区域 -->
    <section class="reviews-section">
      <div class="reviews-container">
        <div class="reviews-header">
          <h2 class="reviews-title">社区评价</h2>
          <p class="reviews-subtitle">来自全球开发者的真实反馈</p>
        </div>

        <!-- 瀑布流布局 -->
        <div id="reviewsMasonry" class="reviews-masonry">
          <div v-for="review in reviews" :key="review.id" class="review-card">
            <div class="review-header">
              <div class="reviewer-info">
                <div class="reviewer-avatar">
                  {{ review.avatar }}
                </div>
                <div class="reviewer-details">
                  <h4 class="reviewer-name">
                    {{ review.name }}
                  </h4>
                  <p class="reviewer-role">
                    {{ review.role }} @ {{ review.company }}
                  </p>
                </div>
              </div>
              <div class="review-rating">
                <div class="stars">
                  <span
                    v-for="i in 5"
                    :key="i"
                    class="star"
                    :class="{ active: i <= review.rating }"
                    >⭐</span
                  >
                </div>
              </div>
            </div>

            <div class="review-content">
              <p class="review-text">
                {{ review.content }}
              </p>
            </div>

            <div class="review-footer">
              <span class="review-date">{{ review.date }}</span>
              <div class="review-actions">
                <button class="like-btn">
                  <span class="like-icon">👍</span>
                  <span class="like-count">{{ review.likes }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  color: #ffffff;
  font-family:
    'Inter',
    'SF Pro Display',
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;
  overflow-x: hidden;
  position: relative;
}

.page-container::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, transparent 50%),
    linear-gradient(225deg, rgba(139, 92, 246, 0.05) 0%, transparent 50%);
  pointer-events: none;
  z-index: 1;
}

/* 顶部横幅广告 - 玻璃拟态设计 */
.hero-banner {
  position: relative;
  z-index: 10;
  padding: 1rem 2rem;
  margin: 1rem;
}

.banner-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem 2rem;

  /* 玻璃拟态效果 */
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 20px;
  position: relative;
  overflow: hidden;
}

.banner-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
}

.banner-icon {
  font-size: 1.5rem;
  background: rgba(99, 102, 241, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 12px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: icon-float 3s infinite ease-in-out;
}

@keyframes icon-float {
  0%,
  100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-3px) scale(1.05);
  }
}

.banner-text {
  flex: 1;
  text-align: center;
}

.banner-main {
  font-size: 1rem;
  background: linear-gradient(135deg, #ffffff, #e2e8f0);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  line-height: 1.4;
}

.banner-cta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(99, 102, 241, 0.15);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 16px;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.banner-cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  transition: left 0.6s ease;
}

.banner-cta:hover {
  background: rgba(99, 102, 241, 0.2);
  border-color: rgba(99, 102, 241, 0.4);
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.2);
  transform: translateY(-2px);
}

.banner-cta:hover::before {
  left: 100%;
}

.cta-text {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  z-index: 2;
}

.cta-arrow {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  transition: transform 0.3s ease;
  position: relative;
  z-index: 2;
}

.cta-text {
  color: #ffffff;
}

.cta-arrow {
  font-size: 1rem;
}

.music-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.music-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    #0a0a1a 0%,
    #1a1a2e 25%,
    #2d1b69 50%,
    #4a148c 75%,
    #6a1b9a 100%
  );
  background-size: 200% 200%;
  opacity: 0.95;
}

.particle-field {
  position: absolute;
  inset: 0;
}

.music-particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: linear-gradient(45deg, #00d4ff, #9c27b0, #ff6b35);
  border-radius: 50%;
  box-shadow: 0 0 15px currentColor;
  top: random(100%);
  left: random(100%);
}

.audio-streams {
  position: absolute;
  inset: 0;
}

.audio-wave {
  position: absolute;
  width: 2px;
  height: 100vh;
  background: linear-gradient(
    to bottom,
    transparent,
    #00d4ff,
    #9c27b0,
    #ff6b35,
    transparent
  );
  left: -3px;
  top: 0;
  opacity: 0.7;
  border-radius: 1px;
}

/* 英雄区域 - 简洁设计 */
.hero-section {
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow: hidden;
}

/* 背景装饰 */
.hero-background {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.4;
}

.orb-1 {
  width: 300px;
  height: 300px;
  background: radial-gradient(
    circle,
    rgba(99, 102, 241, 0.3) 0%,
    transparent 70%
  );
  top: 20%;
  left: 10%;
}

.orb-2 {
  width: 250px;
  height: 250px;
  background: radial-gradient(
    circle,
    rgba(139, 92, 246, 0.2) 0%,
    transparent 70%
  );
  bottom: 20%;
  right: 15%;
}

.grid-pattern {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.3;
}

/* 主内容容器 */
.hero-container {
  max-width: 1200px;
  width: 100%;
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 4rem;
  align-items: center;
}

/* 左侧内容 */
.hero-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* 徽章设计 */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 50px;
  padding: 0.75rem 1.5rem;
  align-self: flex-start;
}

.badge-icon {
  font-size: 1.2rem;
}

.badge-text {
  font-size: 0.9rem;
  font-weight: 600;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 0.5px;
}

.badge-version {
  font-size: 0.8rem;
  font-weight: 700;
  background: rgba(99, 102, 241, 0.15);
  color: #6366f1;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  border: 1px solid rgba(99, 102, 241, 0.3);
}

/* 主标题 */
.hero-title {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.1;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.title-line {
  background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #6366f1 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* 副标题 */
.hero-subtitle {
  font-size: 1.2rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0;
}

/* 特性标签 */
.hero-features {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.feature-tag {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  padding: 0.75rem 1.25rem;
  transition: all 0.3s ease;
}

.feature-tag:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(99, 102, 241, 0.3);
  transform: translateY(-2px);
}

.feature-icon {
  font-size: 1.1rem;
}

.feature-text {
  font-size: 0.9rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
}

/* 行动按钮 */
.hero-actions {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.btn-primary,
.btn-secondary {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 16px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(20px);
  text-decoration: none;
}

.btn-primary {
  background: rgba(99, 102, 241, 0.2);
  border: 1px solid rgba(99, 102, 241, 0.4);
  color: #ffffff;
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
}

.btn-icon {
  font-size: 1.1rem;
}

.btn-text {
  font-weight: 600;
}

.btn-primary:hover {
  background: rgba(99, 102, 241, 0.3);
  border-color: rgba(99, 102, 241, 0.6);
  transform: translateY(-2px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

/* 统计数据 */
.hero-stats {
  display: flex;
  gap: 2rem;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2rem;
}

.stat-item {
  text-align: center;
  flex: 1;
}

.stat-number {
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
}

/* 右侧视觉区域 */
.hero-visual {
  position: relative;
  height: 500px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
}

/* Logo展示区域 */
.logo-showcase {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-main {
  position: relative;
  z-index: 2;
}

.logo-circle {
  position: relative;
  width: 120px;
  height: 120px;
  background: linear-gradient(
    135deg,
    rgba(99, 102, 241, 0.2),
    rgba(139, 92, 246, 0.2)
  );
  backdrop-filter: blur(20px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 40px rgba(99, 102, 241, 0.3);
}

.logo-text {
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 20px rgba(99, 102, 241, 0.5));
}

.logo-ring {
  position: absolute;
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 50%;
  animation: ringPulse 4s ease-in-out infinite;
}

.ring-1 {
  width: 140px;
  height: 140px;
  top: -10px;
  left: -10px;
  animation-delay: 0s;
}

.ring-2 {
  width: 160px;
  height: 160px;
  top: -20px;
  left: -20px;
  animation-delay: -1.3s;
}

.ring-3 {
  width: 180px;
  height: 180px;
  top: -30px;
  left: -30px;
  animation-delay: -2.6s;
}

@keyframes ringPulse {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.05);
  }
}

/* 浮动装饰点 */
.floating-dots {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.dot {
  position: absolute;
  width: 8px;
  height: 8px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 50%;
  opacity: 0.6;
  animation: dotFloat 6s ease-in-out infinite;
}

.dot-1 {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.dot-2 {
  top: 30%;
  right: 15%;
  animation-delay: -1s;
}

.dot-3 {
  bottom: 40%;
  left: 20%;
  animation-delay: -2s;
}

.dot-4 {
  bottom: 30%;
  right: 10%;
  animation-delay: -3s;
}

.dot-5 {
  top: 60%;
  left: 5%;
  animation-delay: -4s;
}

.dot-6 {
  top: 10%;
  right: 25%;
  animation-delay: -5s;
}

@keyframes dotFloat {
  0%,
  100% {
    transform: translateY(0) scale(1);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-15px) scale(1.2);
    opacity: 1;
  }
}

/* 技术栈卡片 */
.tech-stack-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
  max-width: 200px;
}

.tech-card {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  padding: 0.75rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.tech-card:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(99, 102, 241, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.15);
}

.tech-icon {
  width: 20px;
  height: 20px;
  color: #6366f1;
  flex-shrink: 0;
}

.tech-icon svg {
  width: 100%;
  height: 100%;
}

.tech-name {
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
}

/* 代码预览窗口 */
.code-preview {
  width: 100%;
  max-width: 280px;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.code-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.code-dots {
  display: flex;
  gap: 0.5rem;
}

.code-dots .dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  position: static;
  animation: none;
}

.code-dots .dot.red {
  background: #ff5f57;
}

.code-dots .dot.yellow {
  background: #ffbd2e;
}

.code-dots .dot.green {
  background: #28ca42;
}

.code-title {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
}

.code-content {
  padding: 1rem;
  font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
  font-size: 0.75rem;
  line-height: 1.4;
}

.code-line {
  display: flex;
  align-items: center;
  margin-bottom: 0.25rem;
}

.line-number {
  width: 20px;
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.7rem;
  text-align: right;
  margin-right: 1rem;
  user-select: none;
}

.code-text {
  color: rgba(255, 255, 255, 0.8);
}

.tag {
  color: #7dd3fc;
}

.attr {
  color: #fbbf24;
}

.string {
  color: #86efac;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }

  .hero-visual {
    height: 300px;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 1rem;
  }

  .hero-content {
    gap: 1.5rem;
  }

  .hero-title {
    font-size: 3rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .hero-features {
    justify-content: center;
  }

  .hero-actions {
    flex-direction: column;
    gap: 1rem;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    justify-content: center;
  }

  .hero-stats {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
  }

  .hero-visual {
    height: 350px;
    gap: 1.5rem;
  }

  .logo-circle {
    width: 100px;
    height: 100px;
  }

  .logo-text {
    font-size: 2.5rem;
  }

  .ring-1 {
    width: 120px;
    height: 120px;
    top: -10px;
    left: -10px;
  }

  .ring-2 {
    width: 140px;
    height: 140px;
    top: -20px;
    left: -20px;
  }

  .ring-3 {
    width: 160px;
    height: 160px;
    top: -30px;
    left: -30px;
  }

  .tech-stack-cards {
    max-width: 180px;
    gap: 0.75rem;
  }

  .tech-card {
    padding: 0.5rem;
  }

  .tech-name {
    font-size: 0.75rem;
  }

  .code-preview {
    max-width: 250px;
  }

  .code-content {
    padding: 0.75rem;
    font-size: 0.7rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .feature-tag {
    padding: 0.5rem 1rem;
  }

  .btn-primary,
  .btn-secondary {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }

  .stat-number {
    font-size: 1.5rem;
  }

  .hero-badge {
    padding: 0.5rem 1rem;
  }

  .badge-text {
    font-size: 0.8rem;
  }

  .hero-visual {
    height: 300px;
    gap: 1rem;
  }

  .logo-circle {
    width: 80px;
    height: 80px;
  }

  .logo-text {
    font-size: 2rem;
  }

  .tech-stack-cards {
    max-width: 160px;
    gap: 0.5rem;
  }

  .tech-card {
    padding: 0.4rem;
    gap: 0.3rem;
  }

  .tech-icon {
    width: 16px;
    height: 16px;
  }

  .tech-name {
    font-size: 0.7rem;
  }

  .code-preview {
    max-width: 220px;
  }

  .floating-dots {
    display: none;
  }
}

/* 动态背景系统 */
.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  pointer-events: none;
}

/* 渐变光球 */
.gradient-orbs {
  position: absolute;
  inset: 0;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.6;
  animation: float 20s infinite ease-in-out;
}

.orb-1 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.orb-2 {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  top: 60%;
  right: 20%;
  animation-delay: -7s;
}

.orb-3 {
  width: 250px;
  height: 250px;
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
  bottom: 10%;
  left: 60%;
  animation-delay: -14s;
}

@keyframes float {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

/* 网格覆盖层 */
.grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.4;
}

/* 浮动几何图形 */
.floating-shapes {
  position: absolute;
  inset: 0;
}

.shape {
  position: absolute;
  opacity: 0.1;
  animation: shapeFloat 15s infinite ease-in-out;
}

.shape-1 {
  width: 20px;
  height: 20px;
  background: linear-gradient(45deg, #6366f1, #8b5cf6);
  border-radius: 4px;
  top: 10%;
  left: 15%;
  animation-delay: 0s;
}

.shape-2 {
  width: 16px;
  height: 16px;
  background: linear-gradient(45deg, #3b82f6, #06b6d4);
  border-radius: 50%;
  top: 30%;
  right: 25%;
  animation-delay: -2s;
}

.shape-3 {
  width: 24px;
  height: 24px;
  background: linear-gradient(45deg, #8b5cf6, #ec4899);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  bottom: 20%;
  left: 20%;
  animation-delay: -4s;
}

.shape-4 {
  width: 18px;
  height: 18px;
  background: linear-gradient(45deg, #06b6d4, #10b981);
  border-radius: 2px;
  top: 70%;
  right: 15%;
  animation-delay: -6s;
}

.shape-5,
.shape-6,
.shape-7,
.shape-8 {
  width: 12px;
  height: 12px;
  background: linear-gradient(45deg, #6366f1, #3b82f6);
  border-radius: 50%;
  animation-delay:
    -8s,
    -10s,
    -12s,
    -14s;
}

@keyframes shapeFloat {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.1;
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
    opacity: 0.3;
  }
}

/* 中心内容区域 */
.hero-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
}

/* 标题区域 */
.hero-title-area {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.hero-main-title {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.1;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.title-gradient {
  background: linear-gradient(135deg, #6366f1, #8b5cf6, #3b82f6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 30px rgba(99, 102, 241, 0.3));
}

.hero-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

/* 特性网格 */
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin: 1rem 0;
}

.feature-card {
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
}

.feature-card:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(99, 102, 241, 0.3);
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(99, 102, 241, 0.15);
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 0 15px rgba(99, 102, 241, 0.4));
}

.feature-title {
  font-size: 1.1rem;
  font-weight: 700;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 0 0.5rem 0;
}

.feature-desc {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  line-height: 1.4;
}

/* 行动按钮组 */
.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.primary-btn,
.secondary-btn {
  position: relative;
  padding: 1rem 2rem;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  overflow: hidden;
  backdrop-filter: blur(16px);
}

.primary-btn {
  background: rgba(99, 102, 241, 0.2);
  border: 1px solid rgba(99, 102, 241, 0.4);
  color: #ffffff;
}

.secondary-btn {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
}

.primary-btn:hover {
  background: rgba(99, 102, 241, 0.3);
  border-color: rgba(99, 102, 241, 0.6);
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(99, 102, 241, 0.2);
}

.secondary-btn:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(255, 255, 255, 0.1);
}

.btn-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.6s ease;
}

.primary-btn:hover .btn-shine,
.secondary-btn:hover .btn-shine {
  left: 100%;
}

.btn-icon {
  font-size: 1.1rem;
  position: relative;
  z-index: 2;
}

.btn-text {
  position: relative;
  z-index: 2;
}

/* 统计数据 */
.hero-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 1.5rem;
  margin-top: 1rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
}

/* 右侧装饰区域 */
.hero-decoration {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 400px;
}

/* 徽章设计 */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 50px;
  padding: 0.5rem 1rem;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
}

.hero-badge::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  animation: badgeShine 3s infinite;
}

@keyframes badgeShine {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

.badge-icon {
  font-size: 1rem;
  animation: iconPulse 2s infinite ease-in-out;
}

@keyframes iconPulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.badge-text {
  font-size: 0.85rem;
  font-weight: 600;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1px;
}

.badge-version {
  background: rgba(99, 102, 241, 0.2);
  color: #6366f1;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.2rem 0.5rem;
  border-radius: 12px;
  border: 1px solid rgba(99, 102, 241, 0.3);
}

/* 标题区域 */
.hero-title-section {
  margin-bottom: 3rem;
}

.hero-main-title {
  margin: 0 0 1.5rem 0;
  line-height: 1.1;
}

.title-line-1,
.title-line-2 {
  display: block;
  font-size: 3.5rem;
  font-weight: 800;
  font-family:
    'Inter',
    'SF Pro Display',
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;
  background: linear-gradient(135deg, #6366f1, #8b5cf6, #3b82f6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
}

.title-line-1 {
  animation: titleSlideIn 1s ease-out;
}

.title-line-2 {
  animation: titleSlideIn 1s ease-out 0.2s both;
}

@keyframes titleSlideIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-subtitle {
  margin-bottom: 3rem;
}

.hero-subtitle p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  max-width: 500px;
  animation: subtitleFadeIn 1s ease-out 0.4s both;
}

@keyframes subtitleFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-description {
  margin-bottom: 3rem;
}

.hero-description p {
  font-size: 1.2rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto;
}

/* 移除mega-text故障效果 */

/* 移除tagline故障效果 */

/* 特性卡片 - 玻璃拟态 */
.hero-features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.feature-glass-card {
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  position: relative;
  transition: all 0.3s ease;
  overflow: hidden;
}

.feature-glass-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
}

.feature-glass-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(99, 102, 241, 0.3);
  box-shadow: 0 20px 40px rgba(99, 102, 241, 0.1);
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  display: block;
  animation: iconFloat 3s ease-in-out infinite;
}

@keyframes iconFloat {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.feature-content {
  position: relative;
  z-index: 2;
}

.feature-title {
  font-size: 1.1rem;
  font-weight: 700;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 0 0.5rem 0;
}

.feature-desc {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
  margin: 0;
}

.feature-linear-card {
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 12px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  backdrop-filter: blur(10px);
}

.feature-linear-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 12px 12px 0 0;
}

.feature-linear-card:hover {
  border-color: rgba(99, 102, 241, 0.4);
  background: rgba(255, 255, 255, 0.06);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.1);
}

.feature-linear-card:hover::before {
  opacity: 1;
}

.feature-number {
  font-size: 0.8rem;
  font-weight: 700;
  color: #6366f1;
  margin-bottom: 1rem;
  letter-spacing: 1px;
}

.feature-name {
  font-size: 1.2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
}

.feature-desc {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.4;
}

/* 玻璃拟态按钮区域 */
.hero-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
}

.glass-btn {
  position: relative;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  font-family: inherit;
}

.glass-btn.primary {
  background: rgba(99, 102, 241, 0.15);
  border-color: rgba(99, 102, 241, 0.3);
}

.glass-btn.secondary {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.15);
}

.glass-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 40px rgba(99, 102, 241, 0.15);
}

.glass-btn.primary:hover {
  background: rgba(99, 102, 241, 0.2);
  border-color: rgba(99, 102, 241, 0.4);
}

.glass-btn.secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}

.btn-content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  z-index: 2;
}

.btn-icon {
  font-size: 1rem;
}

.btn-text {
  font-size: 0.95rem;
  font-weight: 600;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.glass-btn.secondary .btn-text {
  background: linear-gradient(135deg, #ffffff, #e2e8f0);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.btn-glow {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.6s ease;
}

.glass-btn:hover .btn-glow {
  left: 100%;
}

.linear-btn {
  position: relative;
  padding: 1rem 2.5rem;
  background: transparent;
  border: 2px solid;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  text-transform: uppercase;
  backdrop-filter: blur(10px);
}

.linear-btn.primary {
  border-color: #6366f1;
  color: #6366f1;
  background: rgba(99, 102, 241, 0.1);
}

.linear-btn.secondary {
  border-color: #8b5cf6;
  color: #8b5cf6;
  background: rgba(139, 92, 246, 0.1);
}

.linear-btn .btn-text {
  position: relative;
  z-index: 2;
}

.btn-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.6s ease;
}

.linear-btn:hover .btn-shine {
  left: 100%;
}

.linear-btn.primary:hover {
  background: rgba(99, 102, 241, 0.2);
  box-shadow: 0 0 30px rgba(99, 102, 241, 0.3);
  transform: translateY(-2px);
}

.linear-btn.secondary:hover {
  background: rgba(139, 92, 246, 0.2);
  box-shadow: 0 0 30px rgba(139, 92, 246, 0.3);
  transform: translateY(-2px);
}

/* 玻璃拟态统计数据 */
.hero-stats {
  margin-bottom: 2rem;
}

.stats-glass-card {
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
}

.stats-glass-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
}

.stat-item {
  text-align: center;
  flex: 1;
}

.stat-number {
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
  display: block;
}

.stat-label {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
  letter-spacing: 1px;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  margin: 0 1rem;
}

/* 移除metric故障效果 */

.metric-label {
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 1px;
  text-transform: uppercase;
}

.metric-divider {
  width: 1px;
  height: 40px;
  background: linear-gradient(
    to bottom,
    transparent,
    #6366f1,
    #8b5cf6,
    transparent
  );
  opacity: 0.6;
}

/* 右侧可视化区域 - 重新设计 */
.hero-visual {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  position: relative;
  height: 100%;
}

/* 主视觉元素 */
.visual-main {
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 中心Logo设计 */
.center-logo {
  position: relative;
  z-index: 10;
}

.logo-container {
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-inner {
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(99, 102, 241, 0.3);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  animation: logoFloat 4s ease-in-out infinite;
}

.logo-text {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 20px rgba(99, 102, 241, 0.5));
}

@keyframes logoFloat {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(5deg);
  }
}

/* 旋转环 */
.logo-rings {
  position: absolute;
  inset: 0;
}

.ring {
  position: absolute;
  border: 1px solid;
  border-radius: 50%;
  animation: ringRotate 20s linear infinite;
}

.ring-1 {
  width: 100px;
  height: 100px;
  top: 10px;
  left: 10px;
  border-color: rgba(99, 102, 241, 0.3);
  animation-duration: 15s;
}

.ring-2 {
  width: 120px;
  height: 120px;
  top: 0;
  left: 0;
  border-color: rgba(139, 92, 246, 0.2);
  animation-duration: 25s;
  animation-direction: reverse;
}

.ring-3 {
  width: 140px;
  height: 140px;
  top: -10px;
  left: -10px;
  border-color: rgba(59, 130, 246, 0.15);
  animation-duration: 35s;
}

@keyframes ringRotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* 浮动装饰元素 */
.floating-elements {
  position: absolute;
  inset: 0;
}

.element {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  padding: 0.75rem;
  animation: elementFloat 6s ease-in-out infinite;
  cursor: pointer;
  transition: all 0.3s ease;
}

.element:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(99, 102, 241, 0.3);
  transform: translateY(-5px);
}

.element-1 {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.element-2 {
  top: 15%;
  right: 15%;
  animation-delay: -1.5s;
}

.element-3 {
  bottom: 25%;
  left: 5%;
  animation-delay: -3s;
}

.element-4 {
  bottom: 20%;
  right: 10%;
  animation-delay: -4.5s;
}

.element-icon {
  font-size: 1.2rem;
  filter: drop-shadow(0 0 10px rgba(99, 102, 241, 0.3));
}

.element-label {
  font-size: 0.7rem;
  font-weight: 600;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}

@keyframes elementFloat {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  33% {
    transform: translateY(-15px) rotate(2deg);
  }
  66% {
    transform: translateY(-5px) rotate(-1deg);
  }
}

/* 技术展示区域 */
.tech-showcase {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  min-width: 80px;
}

.tech-item:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(99, 102, 241, 0.3);
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(99, 102, 241, 0.15);
}

.tech-icon {
  width: 40px;
  height: 40px;
  background: rgba(99, 102, 241, 0.15);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.tech-name {
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .hero-main-title {
    font-size: 3rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .primary-btn,
  .secondary-btn {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }

  .hero-stats {
    flex-direction: column;
    gap: 1rem;
  }

  .stat-divider {
    width: 100%;
    height: 1px;
  }

  .hero-decoration {
    height: 300px;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 1rem;
  }

  .hero-content {
    gap: 1.5rem;
  }

  .hero-main-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .features-grid {
    gap: 1rem;
  }

  .feature-card {
    padding: 1rem;
  }

  .feature-icon {
    font-size: 1.5rem;
  }

  .feature-title {
    font-size: 1rem;
  }

  .feature-desc {
    font-size: 0.8rem;
  }

  .primary-btn,
  .secondary-btn {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }

  .hero-stats {
    padding: 1rem;
    gap: 1rem;
  }

  .stat-number {
    font-size: 1.5rem;
  }

  .stat-label {
    font-size: 0.8rem;
  }

  .hero-decoration {
    height: 250px;
  }

  .title-line-1,
  .title-line-2 {
    font-size: 2.5rem;
  }

  .hero-features {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .glass-btn {
    width: 100%;
    max-width: 280px;
  }

  .stats-glass-card {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
  }

  .stat-divider {
    width: 80%;
    height: 1px;
    margin: 0;
  }

  .logo-3d {
    width: 120px;
    height: 120px;
  }

  .logo-face {
    width: 120px;
    height: 120px;
    font-size: 2.5rem;
  }
}

.tech-item:nth-child(2) {
  animation-delay: -1s;
}

.tech-item:nth-child(3) {
  animation-delay: -2s;
}

@keyframes tech-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.version-info {
  text-align: right;
}

.version-label {
  font-size: 0.7rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.4);
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
}

.version-number {
  font-size: 1.5rem;
  font-weight: 900;
  color: #ffffff;
  text-shadow:
    1px 1px 0px #ff0050,
    -1px -1px 0px #00ffff;
  animation: version-pulse 3s infinite;
}

@keyframes version-pulse {
  0%,
  100% {
    text-shadow:
      1px 1px 0px #ff0050,
      -1px -1px 0px #00ffff;
  }
  50% {
    text-shadow:
      2px 2px 0px #ff0050,
      -2px -2px 0px #00ffff;
  }
}

/* 右侧可视化 */
.hero-right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-visual {
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.visual-logo {
  filter: drop-shadow(0 0 40px rgba(0, 212, 255, 0.5));
}

/* 移除tiktok故障效果 */

.floating-elements {
  position: absolute;
  inset: 0;
}

.float-item {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 12px;
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: #00d4ff;
  backdrop-filter: blur(10px);
  white-space: nowrap;
}

.float-1 {
  top: 10%;
  left: 10%;
}
.float-2 {
  top: 20%;
  right: 15%;
}
.float-3 {
  bottom: 25%;
  left: 5%;
}
.float-4 {
  bottom: 15%;
  right: 10%;
}

/* 快速开始区域 */
.quickstart-section {
  position: relative;
  z-index: 2;
  padding: 4rem 2rem;
  background: rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgba(0, 212, 255, 0.1);
}

.quickstart-container {
  max-width: 800px;
  margin: 0 auto;
}

.quickstart-content {
  text-align: center;
}

.quickstart-description {
  font-size: 1.2rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 3rem 0;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.quickstart-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.get-started-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #1976d2;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.get-started-btn:hover {
  background: #1565c0;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(25, 118, 210, 0.3);
}

.btn-text {
  font-weight: 500;
}

.btn-arrow {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.get-started-btn:hover .btn-arrow {
  transform: translateX(2px);
}

.install-command {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 1rem 1.5rem;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  min-width: 300px;
}

.install-command:hover {
  border-color: rgba(0, 212, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}

.command-prefix {
  color: rgba(255, 255, 255, 0.6);
  margin-right: 0.5rem;
  font-weight: 500;
}

.command-text {
  flex: 1;
  color: rgba(255, 255, 255, 0.9);
}

.command-copy {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  margin-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.command-copy:hover {
  color: #00d4ff;
  background: rgba(0, 212, 255, 0.1);
}

.code-block {
  background: rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  border: 1px solid rgba(0, 212, 255, 0.2);
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1.2rem;
  background: rgba(0, 212, 255, 0.1);
  border-bottom: 1px solid rgba(0, 212, 255, 0.2);
}

.code-lang {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
}

.copy-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.8rem;
  background: rgba(0, 212, 255, 0.2);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 6px;
  color: #00d4ff;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.copy-btn:hover {
  background: rgba(0, 212, 255, 0.3);
  transform: translateY(-1px);
}

.copy-icon {
  font-size: 0.9rem;
}

.code-content {
  padding: 1.2rem;
  margin: 0;
  font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
  font-size: 0.95rem;
  line-height: 1.5;
  color: #e8e8e8;
  background: transparent;
  overflow-x: auto;
  white-space: pre;
}

/* 按钮样式 */
.btn-primary,
.btn-secondary,
.btn-outline {
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
  min-width: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
}

.btn-primary {
  background: linear-gradient(135deg, #ff0050, #00ffff);
  color: white;
  box-shadow: 0 8px 25px rgba(255, 0, 80, 0.3);
  position: relative;
  overflow: hidden;
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s;
}

.btn-primary:hover::before {
  left: 100%;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(255, 0, 80, 0.4);
}

.btn-secondary {
  background: transparent;
  color: #00ffff;
  border: 2px solid #00ffff;
  position: relative;
}

.btn-secondary:hover {
  background: rgba(0, 255, 255, 0.1);
  transform: translateY(-2px);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
}

.btn-outline {
  background: transparent;
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.8rem 1.5rem;
  font-size: 0.9rem;
  min-width: 120px;
}

.btn-outline:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  transform: translateY(-1px);
}

.btn-icon {
  font-size: 1rem;
}

/* 支持区域 - 紧凑设计 */
.support-section {
  position: relative;
  z-index: 2;
  padding: 4rem 2rem;
  border-top: 1px solid rgba(99, 102, 241, 0.1);
}

.support-container {
  max-width: 1000px;
  margin: 0 auto;
}

.support-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.support-title {
  font-size: 2.2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 0 0.5rem 0;
}

.support-subtitle {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

/* 玻璃拟态赞助商卡片 */
.sponsors-glass-card {
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
}

.sponsors-glass-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
}

/* 紧凑的赞助商列表 */
.sponsors-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1rem;
}

.sponsor-compact {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.sponsor-compact:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(99, 102, 241, 0.3);
  transform: translateY(-2px);
}

.sponsor-avatar {
  width: 48px;
  height: 48px;
  background: rgba(99, 102, 241, 0.15);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.sponsor-name {
  font-size: 0.9rem;
  font-weight: 600;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
}

.more-sponsors {
  text-align: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.more-text {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
}

/* 紧凑的CTA区域 */
.sponsor-cta-compact {
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
}

.sponsor-cta-compact::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
}

.cta-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.cta-left {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
}

.cta-icon {
  width: 48px;
  height: 48px;
  background: rgba(99, 102, 241, 0.15);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.cta-text {
  flex: 1;
}

.cta-title {
  font-size: 1.2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 0 0.25rem 0;
}

.cta-desc {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

.sponsor-btn-compact {
  background: rgba(99, 102, 241, 0.15);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 12px;
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  position: relative;
  overflow: hidden;
}

.sponsor-btn-compact::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  transition: left 0.6s ease;
}

.sponsor-btn-compact:hover {
  background: rgba(99, 102, 241, 0.2);
  border-color: rgba(99, 102, 241, 0.4);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.2);
}

.sponsor-btn-compact:hover::before {
  left: 100%;
}

.btn-text {
  font-size: 0.9rem;
  font-weight: 600;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  z-index: 2;
}

.btn-arrow {
  font-size: 1rem;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: transform 0.3s ease;
  position: relative;
  z-index: 2;
}

.sponsor-btn-compact:hover .btn-arrow {
  transform: translateX(3px);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .support-section {
    padding: 3rem 1rem;
  }

  .support-title {
    font-size: 1.8rem;
  }

  .sponsors-list {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .sponsor-compact {
    padding: 0.8rem;
  }

  .sponsor-avatar {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }

  .sponsor-name {
    font-size: 0.8rem;
  }

  .cta-content {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }

  .cta-left {
    flex-direction: column;
    text-align: center;
  }

  .sponsor-btn-compact {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .support-section {
    padding: 2rem 1rem;
  }

  .support-title {
    font-size: 1.6rem;
  }

  .sponsors-glass-card {
    padding: 1.5rem;
  }

  .sponsors-list {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }

  .sponsor-cta-compact {
    padding: 1rem;
  }

  .cta-title {
    font-size: 1rem;
  }

  .cta-desc {
    font-size: 0.8rem;
  }
}

/* 移除旧的赞助商样式 */

/* 移除旧的CTA样式 */

/* 移除旧的CTA内容样式 */

.sponsor-btn {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #00d4ff, #9c27b0);
  border: none;
  border-radius: 50px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
}

.sponsor-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(0, 212, 255, 0.4);
}

/* 特性区域 */
.features-area {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem;
}

.features-title {
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 4rem;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.feature-card {
  position: relative;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 0, 80, 0.1);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  transform-style: preserve-3d;
  perspective: 1000px;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, #ff0050, #00ffff, #ff0050);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.feature-card:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: rgba(255, 0, 80, 0.4);
  box-shadow:
    0 20px 40px rgba(255, 0, 80, 0.2),
    0 10px 20px rgba(0, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 212, 255, 0.1),
    rgba(156, 39, 176, 0.05)
  );
  opacity: 0;
  transition: opacity 0.4s ease;
  border-radius: 24px;
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 0 15px #ff0050);
  transition: all 0.4s ease;
  transform: translateZ(20px);
  display: inline-block;
}

.feature-card:hover .feature-icon {
  transform: translateZ(30px) scale(1.1);
  filter: drop-shadow(0 0 25px rgba(99, 102, 241, 0.5));
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  letter-spacing: 0.5px;
  transition: all 0.4s ease;
  transform: translateZ(15px);
}

.feature-card:hover .feature-title {
  transform: translateZ(25px);
}

.feature-desc {
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
  transition: all 0.4s ease;
  transform: translateZ(10px);
}

.feature-card:hover .feature-desc {
  transform: translateZ(20px) translateX(3px);
  color: rgba(255, 255, 255, 0.9);
}

.feature-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    #00d4ff,
    #9c27b0,
    transparent
  );
  opacity: 0.8;
  transition: all 0.4s ease;
}

.feature-card:hover .feature-glow {
  height: 3px;
  opacity: 1;
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.6);
}

/* 添加额外的3D光效 */
.feature-card::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: radial-gradient(
    circle,
    rgba(0, 212, 255, 0.3) 0%,
    transparent 70%
  );
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.6s ease;
  pointer-events: none;
}

.feature-card:hover::after {
  width: 200px;
  height: 200px;
}

/* 为整个特性网格添加透视效果 */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  perspective: 1200px;
  perspective-origin: center center;
}

/* 添加鼠标跟踪3D效果的JavaScript支持样式 */
.feature-card.tilt-active {
  transition: transform 0.1s ease-out;
}

/* 社区评价区域 */
.reviews-section {
  position: relative;
  z-index: 2;
  padding: 6rem 2rem;
  background: rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgba(0, 212, 255, 0.1);
}

.reviews-container {
  max-width: 1200px;
  margin: 0 auto;
}

.reviews-header {
  text-align: center;
  margin-bottom: 4rem;
}

.reviews-title {
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(135deg, #00d4ff, #ffffff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.reviews-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

/* 瀑布流布局 */
.reviews-masonry {
  column-count: 3;
  column-gap: 2rem;
  column-fill: balance;
}

.review-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(0, 212, 255, 0.15);
  backdrop-filter: blur(20px);
  break-inside: avoid;
  transition: all 0.4s ease;
  cursor: pointer;
}

.review-card:hover {
  transform: translateY(-5px);
  border-color: rgba(0, 212, 255, 0.3);
  box-shadow: 0 15px 30px rgba(0, 212, 255, 0.1);
}

.review-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.reviewer-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.reviewer-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(0, 212, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.reviewer-details {
  flex: 1;
}

.reviewer-name {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 0.25rem 0;
}

.reviewer-role {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

.review-rating {
  flex-shrink: 0;
}

.stars {
  display: flex;
  gap: 0.1rem;
}

.star {
  font-size: 0.8rem;
  opacity: 0.3;
  transition: opacity 0.3s ease;
}

.star.active {
  opacity: 1;
}

.review-content {
  margin: 1rem 0;
}

.review-text {
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

.review-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.review-date {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
}

.review-actions {
  display: flex;
  gap: 0.5rem;
}

.like-btn {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 0.3rem 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.like-btn:hover {
  background: rgba(0, 212, 255, 0.1);
  border-color: rgba(0, 212, 255, 0.3);
  color: #00d4ff;
}

.like-icon {
  font-size: 0.9rem;
}

.like-count {
  font-weight: 500;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .hero-banner {
    margin: 0.5rem;
    padding: 0.5rem 1rem;
  }

  .banner-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    padding: 1rem 1.5rem;
  }

  .banner-icon {
    width: 40px;
    height: 40px;
    font-size: 1.3rem;
  }

  .banner-main {
    font-size: 0.9rem;
  }

  .banner-cta {
    font-size: 0.85rem;
    padding: 0.6rem 1.2rem;
  }

  /* 新首屏响应式 */
  .mega-text {
    font-size: 8rem;
  }

  .hero-features-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    max-width: 400px;
  }

  .hero-cta-section {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .linear-btn {
    width: 200px;
  }

  .hero-metrics {
    gap: 2rem;
  }

  .metric-value {
    font-size: 2rem;
  }

  .hero-decorations {
    display: none;
  }
}

@media (max-width: 768px) {
  .hero-banner {
    margin: 0.5rem;
    padding: 0.5rem;
  }

  .banner-content {
    padding: 0.8rem 1rem;
    gap: 0.8rem;
    border-radius: 16px;
  }

  .banner-icon {
    width: 36px;
    height: 36px;
    font-size: 1.2rem;
    border-radius: 10px;
  }

  .banner-main {
    font-size: 0.85rem;
  }

  .banner-cta {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
    border-radius: 12px;
  }

  /* 新首屏移动端适配 */
  .mega-text {
    font-size: 6rem;
  }

  .badge-text {
    font-size: 0.8rem;
    letter-spacing: 1px;
  }

  .tagline-text {
    font-size: 1rem;
  }

  .hero-features-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 3rem;
  }

  .feature-linear-card {
    padding: 1.5rem 1rem;
  }

  .feature-name {
    font-size: 1rem;
  }

  .feature-desc {
    font-size: 0.8rem;
  }

  .linear-btn {
    padding: 0.8rem 2rem;
    font-size: 0.9rem;
    width: 180px;
  }

  .hero-metrics {
    flex-direction: column;
    gap: 1.5rem;
  }

  .metric-value {
    font-size: 1.8rem;
  }

  .metric-label {
    font-size: 0.7rem;
  }

  .digital-rain {
    display: none;
  }

  .glitch-lines .glitch-line:nth-child(n + 11) {
    display: none;
  }

  .quickstart-section {
    padding: 3rem 1rem;
  }

  .quickstart-description {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }

  .quickstart-actions {
    flex-direction: column;
    gap: 1.5rem;
  }

  .get-started-btn {
    width: 200px;
    justify-content: center;
  }

  .install-command {
    min-width: auto;
    width: 100%;
    max-width: 350px;
  }

  .code-content {
    font-size: 0.85rem;
    padding: 1rem;
  }

  .support-section {
    padding: 4rem 1rem;
  }

  .support-title {
    font-size: 2rem;
  }

  .tier-sponsors {
    flex-direction: column;
    align-items: center;
  }

  .sponsor-item {
    min-width: 280px;
  }

  .sponsor-cta-card {
    padding: 2rem;
  }

  .cta-benefits {
    gap: 1rem;
  }

  .features-area {
    padding: 4rem 1rem;
  }

  .features-title {
    font-size: 2.2rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .feature-card {
    padding: 2rem 1.5rem;
  }

  .reviews-section {
    padding: 4rem 1rem;
  }

  .reviews-title {
    font-size: 2.5rem;
  }

  .reviews-masonry {
    column-count: 2;
    column-gap: 1.5rem;
  }

  .review-card {
    padding: 1.2rem;
    margin-bottom: 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero-banner {
    margin: 0.25rem;
    padding: 0.25rem;
  }

  .banner-content {
    padding: 0.6rem 0.8rem;
    gap: 0.6rem;
    border-radius: 12px;
  }

  .banner-icon {
    width: 32px;
    height: 32px;
    font-size: 1rem;
    border-radius: 8px;
  }

  .banner-main {
    font-size: 0.8rem;
    text-align: center;
  }

  .banner-cta {
    font-size: 0.75rem;
    padding: 0.4rem 0.8rem;
    border-radius: 10px;
  }

  .hero-title {
    font-size: 2.8rem;
  }

  .hero-subtitle {
    font-size: 1.3rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .btn-primary,
  .btn-secondary {
    width: 200px;
  }

  .hero-stats {
    flex-direction: column;
    gap: 1rem;
    padding-top: 1.5rem;
  }

  .hero-visual {
    width: 200px;
    height: 200px;
  }

  .glitch-x {
    font-size: 4rem;
  }

  .float-item {
    font-size: 0.75rem;
    padding: 0.4rem 0.8rem;
  }

  .quickstart-description {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  .quickstart-actions {
    gap: 1rem;
  }

  .get-started-btn {
    width: 180px;
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }

  .install-command {
    padding: 0.8rem 1rem;
    font-size: 0.85rem;
    max-width: 300px;
  }

  .command-copy {
    margin-left: 0.5rem;
  }

  .code-header {
    padding: 0.6rem 1rem;
  }

  .copy-btn {
    padding: 0.3rem 0.6rem;
    font-size: 0.8rem;
  }

  .support-title {
    font-size: 1.8rem;
  }

  .tier-title {
    font-size: 1.3rem;
  }

  .sponsor-item {
    min-width: 250px;
    padding: 1rem;
  }

  .sponsor-avatar {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
  }

  .cta-title {
    font-size: 1.5rem;
  }

  .cta-benefits {
    flex-direction: column;
    align-items: center;
  }

  .features-title {
    font-size: 1.8rem;
  }

  .reviews-title {
    font-size: 2rem;
  }

  .reviews-masonry {
    column-count: 1;
    column-gap: 0;
  }

  .review-card {
    padding: 1rem;
    margin-bottom: 1rem;
  }

  .reviewer-info {
    gap: 0.8rem;
  }

  .reviewer-avatar {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }

  .reviewer-name {
    font-size: 0.9rem;
  }

  .reviewer-role {
    font-size: 0.8rem;
  }

  .review-text {
    font-size: 0.9rem;
  }

  .like-btn {
    padding: 0.25rem 0.6rem;
    font-size: 0.75rem;
  }
}
</style>
