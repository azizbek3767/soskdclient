<template>
   <div>
    <BaseHeader />
    <main class="min-h-[80vh]">
      <slot />
    </main>
    <BaseFooter />
  </div>
</template>
  
<script setup lang="ts">
import BaseHeader from '@/components/BaseHeader.vue'
import BaseFooter from '@/components/BaseFooter.vue'
</script>
  
  