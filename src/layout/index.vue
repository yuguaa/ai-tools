<template>
  <router-view></router-view>
</template>
<script setup>
import { useRouter, RouterView } from 'vue-router'
import { getToken } from '@/lib/token';
const router = useRouter()
const checkUserLogin = () => {
  const userId = getToken()
  if (userId) {
    router.replace('/tools')
  } else {
    router.push('/login')
  }
}
// checkUserLogin()
</script>