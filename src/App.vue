<script setup lang="ts">
import TopNavbar from '@/components/Layout/TopNavbar.vue'
import Sidebar from '@/components/Layout/Sidebar.vue'
import AuthLayout from '@/components/Layout/main/AuthLayout.vue';

</script>

<template>
  <AuthLayout>
    <RouterView></RouterView>
  </AuthLayout>
</template>
