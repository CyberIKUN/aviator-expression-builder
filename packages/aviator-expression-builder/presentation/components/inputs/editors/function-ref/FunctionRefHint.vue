<template>
  <div class="function-hint">
    <icon-info-circle style="color: #165dff; margin-right: 4px" />
    <span class="hint-text">选择函数计算比较值</span>
  </div>
</template>

<style scoped lang="scss">
.function-hint {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  padding: 4px 8px;
  border-radius: 4px;
  background: rgba(var(--primary-6), 0.1);
  border: 1px solid rgba(var(--primary-6), 0.3);
}

.hint-text {
  font-size: 12px;
  color: #4e5969;
}
</style>
