<template>
  <div class="time-display">
    <p>加拿大时间 (温哥华): {{ canadaTime }}</p>
    <p>中国时间 (北京): {{ chinaTime }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const canadaTime = ref('');
const chinaTime = ref('');
let timer = null;

const updateTime = () => {
  const now = new Date();

  // 定义统一的格式选项
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  };

  // 格式化加拿大温哥华时间
  canadaTime.value = now.toLocaleString('zh-CN', {
    ...options,
    timeZone: 'America/Vancouver'
  });

  // 格式化中国北京时间
  chinaTime.value = now.toLocaleString('zh-CN', {
    ...options,
    timeZone: 'Asia/Shanghai'
  });
};

onMounted(() => {
  updateTime();
  timer = setInterval(updateTime, 1000);
});

onUnmounted(() => {
  if (timer) {
    clearInterval(timer);
  }
});
</script>

<style scoped>
.time-display {
  padding: 1rem;
  background-color: var(--vp-c-bg-soft);
  border-left: 4px solid var(--vp-c-brand-1);
  border-radius: 4px;
  color: var(--vp-c-text-1);
}
</style>