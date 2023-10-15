<template>
    <div class="box">
        <p>{{ text }}</p>
    </div>
</template>

<script setup lang="ts">

defineProps<{
  text: string
}>()

</script>

<style>
.box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100px;
    background-color: #f2f2f2;
    border: 1px solid #ccc;
    aspect-ratio: 1 / 1;
}
</style>
