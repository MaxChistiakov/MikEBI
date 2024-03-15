<template>
  <v-container>
    <div class="base-header d-flex align-center justify-end">
    <div class="wrapper">
      <div class="user-name">
      {{ userName }}
    </div>
    <div class="coins d-flex ga-4">
      <div class="coins-quantity">
        {{  coinsQuantity }}
      </div>
      <div class="coin-icon">
        <img src="../assets/coin.png" alt="">
      </div>
    </div>
    </div>
  </div>
  </v-container>
</template>

<script setup lang="ts">

  interface baseHeaderInterface {
    userName?: string,
    coinsQuantity?: number
  }

  const props = withDefaults(defineProps<baseHeaderInterface>(), {
    userName: 'Anton',
    coinsQuantity: 1000
  })

</script>
