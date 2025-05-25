<template>
  <header>
    <section class="px-4 py-2">
      <div class="wallet__tag flex justify-between">
        <span class="flex gap-2">
          <img
            class="pb-1"
            src="@/assets/img/Wallet-1.svg"
            alt="wallet"
            width="23"
          />
          <b class="text-lg">Kiếm tiền</b>
        </span>
        <img src="/src/assets/img/Notification-1.svg" alt="bell1" width="23" />
      </div>

      <div class="flex mt-3 justify-between">
        <div class="">
          Chào, <b>{{ username }}!</b>
          <p>Chọn tài khoản kiếm tiền</p>
        </div>
        <img :src="userImage" width="48" />
      </div>
    </section>
  </header>
</template>

<script setup>
defineProps({
  username: String,
  userImage: String,
})
</script>
