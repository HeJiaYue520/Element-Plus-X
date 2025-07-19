<script setup lang="ts">
import gsap from 'gsap';
import Theme from 'vitepress/theme';
import { onMounted, ref } from 'vue';

const menuOpen = ref(false);
function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

const navItems = ref([
  { name: 'Predict', href: '#predict' },
  { name: 'Stake', href: '#stake' },
  { name: 'OVAULT', href: '#ovault' },
  { name: 'NFTs', href: '#nfts' }
]);

onMounted(() => {
  // Linear风格流动渐变背景动画
  gsap.to('.linear-gradient-bg', {
    backgroundPosition: '200% 50%',
    duration: 20,
    repeat: -1,
    ease: 'none'
  });

  // 几何形状动画
  gsap.utils.toArray('.geometric-shape').forEach((shape: any, i: number) => {
    gsap.to(shape, {
      y: 'random(-20, 20)',
      x: 'random(-15, 15)',
      rotation: 'random(0, 360)',
      duration: 'random(8, 15)',
      repeat: -1,
      yoyo: true,
      delay: i * 0.3,
      ease: 'sine.inOut'
    });
  });

  // Linear风格Logo悬浮动画
  gsap.to('.linear-logo-x', {
    y: -5,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  });

  // Linear导航菜单项悬停动画
  gsap.utils.toArray('.opulous-menu a').forEach((el: any) => {
    el.addEventListener('mouseenter', () => {
      gsap.to(el, {
        y: -2,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    el.addEventListener('mouseleave', () => {
      gsap.to(el, {
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });

  // Linear Footer链接悬停效果
  gsap.utils.toArray('.footer-link').forEach((link: any) => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, {
        x: 5,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    link.addEventListener('mouseleave', () => {
      gsap.to(link, {
        x: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });

  // Footer入场动画
  const footerObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 标题动画
          gsap.utils
            .toArray('.section-title')
            .forEach((title: any, i: number) => {
              gsap.fromTo(
                title,
                {
                  y: 30,
                  opacity: 0
                },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: 'power2.out'
                }
              );
            });

          // 链接动画
          gsap.utils.toArray('.footer-link').forEach((link: any, i: number) => {
            gsap.fromTo(
              link,
              {
                x: -20,
                opacity: 0
              },
              {
                x: 0,
                opacity: 1,
                duration: 0.6,
                delay: 0.5 + i * 0.05,
                ease: 'power2.out'
              }
            );
          });

          // 统计数据动画
          gsap.utils.toArray('.stat-item').forEach((stat: any, i: number) => {
            gsap.fromTo(
              stat,
              {
                scale: 0.8,
                opacity: 0
              },
              {
                scale: 1,
                opacity: 1,
                duration: 0.6,
                delay: 0.3 + i * 0.1,
                ease: 'back.out(1.7)'
              }
            );
          });

          // 版权信息动画
          gsap.fromTo(
            '.footer-copyright',
            {
              y: 20,
              opacity: 0
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: 1,
              ease: 'power2.out'
            }
          );

          footerObserver.disconnect();
        }
      });
    },
    { threshold: 0.1 }
  );

  const footer = document.querySelector('.linear-footer');
  if (footer) {
    footerObserver.observe(footer);
  }
});
</script>

<template>
  <div class="opulous-layout">
    <!-- Linear风格背景装饰 -->
    <div class="linear-background">
      <div class="linear-gradient-bg" />
      <div class="geometric-patterns">
        <div
          v-for="i in 6"
          :key="i"
          class="geometric-shape"
          :style="{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`
          }"
        />
      </div>
    </div>

    <!-- 导航栏 -->
    <header class="opulous-header">
      <div class="opulous-logo">
        <div class="opulous-logo-icon">
          <div class="linear-logo-x">X</div>
        </div>
      </div>

      <nav class="opulous-menu" :class="{ open: menuOpen }">
        <a v-for="item in navItems" :key="item.name" :href="item.href">{{
          item.name
        }}</a>
      </nav>

      <div class="menu-toggle" @click="toggleMenu">
        <span /><span /><span />
      </div>
    </header>

    <!-- 主内容 -->
    <main class="opulous-main">
      <Theme.Layout />
    </main>

    <!-- Footer -->
    <footer class="linear-footer">
      <!-- Linear简洁背景 -->
      <div class="footer-linear-bg">
        <div class="footer-gradient-lines">
          <div v-for="i in 3" :key="i" class="gradient-line" />
        </div>
      </div>

      <div class="footer-container">
        <!-- 主要内容区域 -->
        <div class="footer-main">
          <!-- 项目介绍 -->
          <div class="footer-section">
            <div class="section-header">
              <h3 class="section-title linear-text">ELEMENT PLUS X</h3>
            </div>
            <p class="section-desc">
              下一代 Vue 3 组件库，融合现代设计与极致性能。
              为开发者提供强大、灵活、美观的 UI 解决方案。
            </p>
            <div class="project-stats">
              <div class="stat-item">
                <span class="stat-number linear-number">50+</span>
                <span class="stat-label">组件</span>
              </div>
              <div class="stat-item">
                <span class="stat-number linear-number">10K+</span>
                <span class="stat-label">下载</span>
              </div>
              <div class="stat-item">
                <span class="stat-number linear-number">99%</span>
                <span class="stat-label">满意度</span>
              </div>
            </div>
          </div>

          <!-- 生态链接 -->
          <div class="footer-section">
            <div class="section-header">
              <h3 class="section-title linear-text">ECOSYSTEM</h3>
            </div>
            <div class="link-grid">
              <a href="https://vuejs.org" class="footer-link" target="_blank">
                <span class="link-icon">⚡</span>
                <span class="link-text">Vue.js</span>
                <span class="link-desc">渐进式框架</span>
              </a>
              <a href="https://vitejs.dev" class="footer-link" target="_blank">
                <span class="link-icon">🚀</span>
                <span class="link-text">Vite</span>
                <span class="link-desc">构建工具</span>
              </a>
              <a
                href="https://www.typescriptlang.org"
                class="footer-link"
                target="_blank"
              >
                <span class="link-icon">📘</span>
                <span class="link-text">TypeScript</span>
                <span class="link-desc">类型安全</span>
              </a>
              <a
                href="https://pinia.vuejs.org"
                class="footer-link"
                target="_blank"
              >
                <span class="link-icon">🍍</span>
                <span class="link-text">Pinia</span>
                <span class="link-desc">状态管理</span>
              </a>
            </div>
          </div>

          <!-- 社区链接 -->
          <div class="footer-section">
            <div class="section-header">
              <h3 class="section-title linear-text">COMMUNITY</h3>
            </div>
            <div class="link-grid">
              <a
                href="https://github.com/element-plus/element-plus"
                class="footer-link"
                target="_blank"
              >
                <span class="link-icon">🐙</span>
                <span class="link-text">GitHub</span>
                <span class="link-desc">源码仓库</span>
              </a>
              <a
                href="https://discord.gg/element-plus"
                class="footer-link"
                target="_blank"
              >
                <span class="link-icon">💬</span>
                <span class="link-text">Discord</span>
                <span class="link-desc">实时交流</span>
              </a>
              <a
                href="https://twitter.com/element_plus"
                class="footer-link"
                target="_blank"
              >
                <span class="link-icon">🐦</span>
                <span class="link-text">Twitter</span>
                <span class="link-desc">最新动态</span>
              </a>
              <a
                href="https://stackoverflow.com/questions/tagged/element-plus"
                class="footer-link"
                target="_blank"
              >
                <span class="link-icon">📚</span>
                <span class="link-text">Stack Overflow</span>
                <span class="link-desc">问题解答</span>
              </a>
            </div>
          </div>

          <!-- 友情链接 -->
          <div class="footer-section">
            <div class="section-header">
              <h3 class="section-title linear-text">PARTNERS</h3>
            </div>
            <div class="link-grid">
              <a href="https://antdv.com" class="footer-link" target="_blank">
                <span class="link-icon">🐜</span>
                <span class="link-text">Ant Design Vue</span>
                <span class="link-desc">企业级UI</span>
              </a>
              <a href="https://naiveui.com" class="footer-link" target="_blank">
                <span class="link-icon">🌟</span>
                <span class="link-text">Naive UI</span>
                <span class="link-desc">现代组件库</span>
              </a>
              <a href="https://quasar.dev" class="footer-link" target="_blank">
                <span class="link-icon">💎</span>
                <span class="link-text">Quasar</span>
                <span class="link-desc">全栈框架</span>
              </a>
              <a
                href="https://primevue.org"
                class="footer-link"
                target="_blank"
              >
                <span class="link-icon">🎨</span>
                <span class="link-text">PrimeVue</span>
                <span class="link-desc">丰富组件</span>
              </a>
            </div>
          </div>
        </div>

        <!-- 底部版权信息 -->
        <div class="footer-bottom">
          <div class="footer-divider" />
          <div class="footer-copyright">
            <div class="copyright-left">
              <span class="copyright-text linear-text"
                >© 2024 ELEMENT PLUS X</span
              >
              <span class="copyright-desc">ALL RIGHTS RESERVED</span>
            </div>
            <div class="copyright-right">
              <span class="version-badge">
                <span class="version-label">VERSION</span>
                <span class="version-number linear-text">2.0.0</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.opulous-layout {
  min-height: 100vh;
  background:
    linear-gradient(
      135deg,
      #0f0f23 0%,
      #1a1a2e 20%,
      #16213e 40%,
      #2d1b69 60%,
      #4a148c 80%,
      #6a1b9a 100%
    ),
    radial-gradient(
      ellipse at top left,
      rgba(99, 102, 241, 0.12) 0%,
      transparent 60%
    ),
    radial-gradient(
      ellipse at bottom right,
      rgba(139, 92, 246, 0.12) 0%,
      transparent 60%
    ),
    radial-gradient(
      ellipse at center,
      rgba(59, 130, 246, 0.08) 0%,
      transparent 70%
    );
  background-size:
    100% 100%,
    80% 80%,
    80% 80%,
    60% 60%;
  background-attachment: fixed;
  animation: layoutGradientShift 25s ease-in-out infinite;
  color: #fff;
  font-family:
    'Inter',
    'SF Pro Display',
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;
  overflow-x: hidden;
  position: relative;
}

@keyframes layoutGradientShift {
  0%,
  100% {
    background-position:
      0% 0%,
      0% 0%,
      100% 100%,
      50% 50%;
  }
  25% {
    background-position:
      25% 25%,
      20% 20%,
      80% 80%,
      30% 70%;
  }
  50% {
    background-position:
      50% 50%,
      40% 40%,
      60% 60%,
      70% 30%;
  }
  75% {
    background-position:
      75% 75%,
      60% 60%,
      40% 40%,
      20% 80%;
  }
}

/* Linear背景装饰 */
.linear-background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  pointer-events: none;
}

.geometric-patterns {
  position: absolute;
  inset: 0;
}

/* 动态背景 */
.music-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.linear-gradient-bg {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      135deg,
      #0f0f23 0%,
      #1a1a2e 15%,
      #16213e 30%,
      #2d1b69 45%,
      #4a148c 60%,
      #6a1b9a 75%,
      #8b5cf6 90%,
      #6366f1 100%
    ),
    linear-gradient(
      45deg,
      rgba(99, 102, 241, 0.1) 0%,
      transparent 50%,
      rgba(139, 92, 246, 0.1) 100%
    ),
    radial-gradient(
      circle at 30% 70%,
      rgba(59, 130, 246, 0.08) 0%,
      transparent 50%
    );
  background-size:
    300% 300%,
    200% 200%,
    150% 150%;
  opacity: 0.9;
  animation: backgroundFlow 30s ease-in-out infinite;
}

@keyframes backgroundFlow {
  0%,
  100% {
    background-position:
      0% 0%,
      0% 0%,
      0% 0%;
  }
  33% {
    background-position:
      100% 100%,
      50% 50%,
      30% 70%;
  }
  66% {
    background-position:
      50% 50%,
      100% 100%,
      70% 30%;
  }
}

.particle-field {
  position: absolute;
  inset: 0;
}

.geometric-shape {
  position: absolute;
  width: 4px;
  height: 4px;
  background:
    linear-gradient(
      45deg,
      #6366f1 0%,
      #8b5cf6 25%,
      #3b82f6 50%,
      #ec4899 75%,
      #10b981 100%
    ),
    radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
  background-size:
    200% 200%,
    100% 100%;
  border-radius: 2px;
  opacity: 0.6;
  animation:
    geometric-float 12s infinite ease-in-out,
    shapeGradientShift 8s infinite ease-in-out;
  box-shadow: 0 0 8px rgba(99, 102, 241, 0.4);
}

@keyframes shapeGradientShift {
  0%,
  100% {
    background-position:
      0% 0%,
      center;
  }
  50% {
    background-position:
      100% 100%,
      center;
  }
}

@keyframes geometric-float {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.4;
  }
  25% {
    transform: translateY(-20px) rotate(90deg);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-10px) rotate(180deg);
    opacity: 0.3;
  }
  75% {
    transform: translateY(-30px) rotate(270deg);
    opacity: 0.5;
  }
}

/* 移除音频相关样式，使用Linear风格 */

/* 导航栏 */
.opulous-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5vw;
  background:
    linear-gradient(
      135deg,
      rgba(15, 15, 35, 0.95) 0%,
      rgba(26, 26, 46, 0.9) 50%,
      rgba(22, 33, 62, 0.95) 100%
    ),
    radial-gradient(
      ellipse at left,
      rgba(99, 102, 241, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(
      ellipse at right,
      rgba(139, 92, 246, 0.1) 0%,
      transparent 50%
    );
  backdrop-filter: blur(30px);
  border-bottom: 1px solid;
  border-image: linear-gradient(
      90deg,
      rgba(99, 102, 241, 0.3),
      rgba(139, 92, 246, 0.3),
      rgba(59, 130, 246, 0.3)
    )
    1;
  z-index: 100;
  box-shadow:
    0 4px 30px rgba(15, 15, 35, 0.8),
    0 0 20px rgba(99, 102, 241, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.opulous-logo {
  display: flex;
  align-items: center;
  gap: 15px;
}

.opulous-logo-icon {
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.linear-logo-x {
  position: relative;
  display: inline-block;
  font-size: 2rem;
  font-weight: 800;
  font-family:
    'Inter',
    'SF Pro Display',
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;
  background:
    linear-gradient(
      135deg,
      #6366f1 0%,
      #8b5cf6 25%,
      #3b82f6 50%,
      #ec4899 75%,
      #6366f1 100%
    ),
    radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.3) 0%,
      transparent 70%
    );
  background-size:
    200% 200%,
    100% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 25px rgba(99, 102, 241, 0.5));
  animation: logoGradientFlow 6s ease-in-out infinite;
}

@keyframes logoGradientFlow {
  0%,
  100% {
    background-position:
      0% 50%,
      center;
  }
  50% {
    background-position:
      100% 50%,
      center;
  }
}

/* Linear风格，移除故障动画 */

.opulous-logo-text {
  font-size: 1.6rem;
  font-weight: 800;
  background: linear-gradient(135deg, #00d4ff, #ffffff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.opulous-menu {
  display: flex;
  gap: 3rem;
  z-index: 101;
}

.opulous-menu a {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  position: relative;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 0.5rem 0;
}

.opulous-menu a:hover {
  color: #6366f1;
}

.opulous-menu a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
  transition: width 0.3s ease;
  border-radius: 1px;
}

.opulous-menu a:hover::after {
  width: 100%;
  box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
  padding: 10px;
  z-index: 102;
}

.menu-toggle span {
  display: block;
  width: 26px;
  height: 2px;
  background: #6366f1;
  border-radius: 2px;
  transition: all 0.3s ease;
  box-shadow: 0 0 5px rgba(99, 102, 241, 0.3);
}

/* 主内容区 */
.opulous-main {
  position: relative;
  z-index: 10;
  padding-top: 80px;
  min-height: calc(100vh - 80px);
  background: transparent;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .opulous-header {
    padding: 0 4vw;
    height: 70px;
  }

  .opulous-main {
    padding-top: 70px;
    min-height: calc(100vh - 70px);
  }

  .opulous-logo-text {
    font-size: 1.3rem;
  }

  .opulous-menu {
    position: fixed;
    top: 70px;
    right: -100vw;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(25px);
    width: 75vw;
    max-width: 350px;
    height: calc(100vh - 70px);
    padding: 3rem 2rem;
    gap: 2.5rem;
    transition: right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border-left: 1px solid rgba(255, 0, 80, 0.3);
    z-index: 200;
  }

  .opulous-menu.open {
    right: 0;
  }

  .menu-toggle {
    display: flex;
  }

  .menu-toggle span:nth-child(1) {
    transform-origin: center;
  }

  .menu-toggle span:nth-child(3) {
    transform-origin: center;
  }

  .menuOpen .menu-toggle span:nth-child(1) {
    transform: rotate(45deg) translateY(8px);
  }

  .menuOpen .menu-toggle span:nth-child(2) {
    opacity: 0;
  }

  .menuOpen .menu-toggle span:nth-child(3) {
    transform: rotate(-45deg) translateY(-8px);
  }
}

@media (max-width: 480px) {
  .opulous-header {
    padding: 0 3vw;
  }

  .opulous-logo-text {
    font-size: 1.1rem;
  }

  .opulous-logo-icon {
    width: 35px;
    height: 35px;
  }

  .opulous-menu {
    width: 85vw;
    padding: 2rem 1.5rem;
  }
}

/* VitePress 样式覆盖 */
:deep(.VPFooter) {
  background-color: transparent !important;
  border-top: 1px solid rgba(255, 0, 80, 0.2) !important;
}

:deep(.VPDoc) {
  background: transparent !important;
}

:deep(.VPContent) {
  background: transparent !important;
}

:deep(.VPNav) {
  background: transparent !important;
}

/* Footer - Linear风格 */
.linear-footer {
  position: relative;
  background:
    linear-gradient(
      135deg,
      rgba(15, 15, 35, 0.98) 0%,
      rgba(26, 26, 46, 0.95) 50%,
      rgba(22, 33, 62, 0.98) 100%
    ),
    radial-gradient(
      ellipse at top,
      rgba(99, 102, 241, 0.08) 0%,
      transparent 60%
    ),
    radial-gradient(
      ellipse at bottom,
      rgba(139, 92, 246, 0.08) 0%,
      transparent 60%
    );
  border-top: 1px solid;
  border-image: linear-gradient(
      90deg,
      rgba(99, 102, 241, 0.3),
      rgba(139, 92, 246, 0.3),
      rgba(59, 130, 246, 0.3)
    )
    1;
  margin-top: 4rem;
  overflow: hidden;
  backdrop-filter: blur(25px);
  box-shadow:
    0 -4px 30px rgba(15, 15, 35, 0.8),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.footer-linear-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
}

.footer-gradient-lines {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.gradient-line {
  position: absolute;
  left: 0;
  right: 0;
  height: 3px;
  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(99, 102, 241, 0.6),
      rgba(139, 92, 246, 0.6),
      rgba(59, 130, 246, 0.6),
      rgba(236, 72, 153, 0.6),
      rgba(16, 185, 129, 0.6),
      transparent
    ),
    radial-gradient(
      ellipse at center,
      rgba(255, 255, 255, 0.2) 0%,
      transparent 70%
    );
  animation: gradient-move 10s infinite linear;
  border-radius: 2px;
  box-shadow: 0 0 10px rgba(99, 102, 241, 0.4);
}

.gradient-line:nth-child(1) {
  top: 20%;
  animation-delay: 0s;
}
.gradient-line:nth-child(2) {
  top: 50%;
  animation-delay: -3s;
}
.gradient-line:nth-child(3) {
  top: 80%;
  animation-delay: -6s;
}

@keyframes gradient-move {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  20% {
    opacity: 0.6;
  }
  80% {
    opacity: 0.6;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}

.footer-container {
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem 2rem;
}

.footer-main {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-section {
  position: relative;
}

.section-header {
  margin-bottom: 1.5rem;
}

.section-title {
  position: relative;
  font-size: 1.2rem;
  font-weight: 700;
  background: linear-gradient(
    135deg,
    #6366f1 0%,
    #8b5cf6 30%,
    #3b82f6 60%,
    #6366f1 100%
  );
  background-size: 200% 200%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1px;
  margin: 0 0 1rem 0;
  animation: sectionTitleGradient 7s ease-in-out infinite;
  filter: drop-shadow(0 0 12px rgba(99, 102, 241, 0.3));
}

@keyframes sectionTitleGradient {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Linear文本样式 */
.linear-text {
  background: linear-gradient(
    135deg,
    #6366f1 0%,
    #8b5cf6 25%,
    #3b82f6 50%,
    #ec4899 75%,
    #6366f1 100%
  );
  background-size: 200% 200%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 18px rgba(99, 102, 241, 0.4));
  animation: linearTextGradient 9s ease-in-out infinite;
}

@keyframes linearTextGradient {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.section-desc {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.project-stats {
  display: flex;
  gap: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  position: relative;
  display: block;
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.linear-number {
  background: linear-gradient(
    135deg,
    #6366f1 0%,
    #8b5cf6 20%,
    #3b82f6 40%,
    #ec4899 60%,
    #10b981 80%,
    #6366f1 100%
  );
  background-size: 200% 200%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 25px rgba(99, 102, 241, 0.4));
  animation: linearNumberGradient 5s ease-in-out infinite;
}

@keyframes linearNumberGradient {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.stat-label {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
}

/* 链接网格 */
.link-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background:
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.05) 0%,
      rgba(255, 255, 255, 0.02) 100%
    ),
    linear-gradient(
      45deg,
      rgba(99, 102, 241, 0.04) 0%,
      rgba(139, 92, 246, 0.04) 100%
    ),
    radial-gradient(
      ellipse at center,
      rgba(255, 255, 255, 0.02) 0%,
      transparent 70%
    );
  border: 1px solid;
  border-image: linear-gradient(
      135deg,
      rgba(99, 102, 241, 0.25),
      rgba(139, 92, 246, 0.25),
      rgba(59, 130, 246, 0.25)
    )
    1;
  border-radius: 8px;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(15px);
  box-shadow:
    0 2px 10px rgba(99, 102, 241, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.footer-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(99, 102, 241, 0.15),
    rgba(139, 92, 246, 0.15),
    rgba(59, 130, 246, 0.15),
    transparent
  );
  transition: left 0.6s ease;
}

.footer-link:hover::before {
  left: 100%;
}

.footer-link:hover {
  border-image: linear-gradient(
      135deg,
      rgba(99, 102, 241, 0.5),
      rgba(139, 92, 246, 0.5),
      rgba(59, 130, 246, 0.5)
    )
    1;
  background:
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.08) 0%,
      rgba(255, 255, 255, 0.04) 100%
    ),
    linear-gradient(
      45deg,
      rgba(99, 102, 241, 0.08) 0%,
      rgba(139, 92, 246, 0.08) 100%
    ),
    radial-gradient(
      ellipse at center,
      rgba(255, 255, 255, 0.04) 0%,
      transparent 70%
    );
  transform: translateX(8px) scale(1.02);
  box-shadow:
    0 4px 25px rgba(99, 102, 241, 0.2),
    0 0 20px rgba(139, 92, 246, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.link-icon {
  font-size: 1.2rem;
  flex-shrink: 0;
}

.link-text {
  font-weight: 600;
  font-size: 0.9rem;
  flex: 1;
  color: rgba(255, 255, 255, 0.9);
}

.link-desc {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  flex-shrink: 0;
}

/* 底部版权区域 */
.footer-bottom {
  margin-top: 2rem;
}

.footer-divider {
  height: 2px;
  background:
    linear-gradient(
      90deg,
      transparent,
      #6366f1,
      #8b5cf6,
      #3b82f6,
      #ec4899,
      #10b981,
      #6366f1,
      transparent
    ),
    radial-gradient(
      ellipse at center,
      rgba(255, 255, 255, 0.3) 0%,
      transparent 70%
    );
  background-size:
    200% 100%,
    100% 100%;
  margin-bottom: 2rem;
  opacity: 0.6;
  border-radius: 1px;
  animation: dividerGradientFlow 8s ease-in-out infinite;
  box-shadow: 0 0 15px rgba(99, 102, 241, 0.3);
}

@keyframes dividerGradientFlow {
  0%,
  100% {
    background-position:
      0% 50%,
      center;
  }
  50% {
    background-position:
      100% 50%,
      center;
  }
}

.footer-copyright {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
}

.copyright-left {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.copyright-text {
  position: relative;
  font-size: 0.9rem;
  font-weight: 600;
  background: linear-gradient(
    135deg,
    #6366f1 0%,
    #8b5cf6 25%,
    #3b82f6 50%,
    #ec4899 75%,
    #6366f1 100%
  );
  background-size: 200% 200%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: copyrightGradient 8s ease-in-out infinite;
  filter: drop-shadow(0 0 10px rgba(99, 102, 241, 0.3));
}

@keyframes copyrightGradient {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.copyright-desc {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.4);
  font-weight: 600;
  letter-spacing: 1px;
}

.copyright-right {
  display: flex;
  align-items: center;
}

.version-badge {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;
}

.version-label {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.4);
  font-weight: 600;
  letter-spacing: 1px;
}

.version-number {
  position: relative;
  font-size: 1.2rem;
  font-weight: 800;
  background: linear-gradient(
    135deg,
    #6366f1 0%,
    #8b5cf6 20%,
    #3b82f6 40%,
    #ec4899 60%,
    #10b981 80%,
    #6366f1 100%
  );
  background-size: 200% 200%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 20px rgba(99, 102, 241, 0.4));
  animation: versionGradient 6s ease-in-out infinite;
}

@keyframes versionGradient {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Footer 响应式设计 */
@media (max-width: 1024px) {
  .footer-main {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .footer-section:first-child {
    grid-column: 1 / -1;
  }

  .project-stats {
    justify-content: center;
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .footer-container {
    padding: 3rem 1rem 1.5rem;
  }

  .footer-main {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    margin-bottom: 2rem;
  }

  .project-stats {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  .stat-item {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .stat-number {
    font-size: 1.5rem;
    margin-bottom: 0;
  }

  .footer-copyright {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .version-badge {
    align-items: center;
  }

  .scan-line:nth-child(n + 5) {
    display: none;
  }
}

@media (max-width: 480px) {
  .footer-container {
    padding: 2rem 1rem 1rem;
  }

  .section-title {
    font-size: 1rem;
  }

  .section-desc {
    font-size: 0.9rem;
  }

  .footer-link {
    padding: 0.6rem;
    gap: 0.6rem;
  }

  .link-text {
    font-size: 0.85rem;
  }

  .link-desc {
    font-size: 0.75rem;
  }

  .stat-number {
    font-size: 1.3rem;
  }

  .copyright-text {
    font-size: 0.8rem;
  }

  .version-number {
    font-size: 1rem;
  }
}
</style>
