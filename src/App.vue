<template>
  <w-app>
    <header>
      <w-toolbar shadow>
        <div class="title2">
          RP App
        </div>
        <div class="spacer" />
      </w-toolbar>
    </header>
    <main class="grow ma2">
      <router-view />
    </main>
  </w-app>
</template>

<script setup>


</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
}
</style>
