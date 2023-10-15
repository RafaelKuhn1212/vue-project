<script setup lang="ts">

defineProps<{
  number: number,
  text?: string
  box?:{
    id: number
    text: string
  }
}>()
</script>

<template>

<div :class="box==undefined ? 'dropAreaClear' : 'dropArea'" :draggable="box!=undefined">
<p :class="box==undefined ? 'number' : 'dropArea'">{{ box==undefined ? number : '' }}</p>
<p :class="box==undefined ? 'dragHere' : 'text'">{{ box==undefined ? (text || "Arraste aqui") : box.text }}</p>
</div>

</template>

<style scoped>

    .number {
        position: absolute;

        margin-left: 2.5px;

        color: rgb(0, 0, 0);
        font-size: 12px;

        left: 0;
        top: 0;
    }
    .text{
        position: absolute;

        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 100%;

        font-size: 12px;

        color: rgb(155, 155, 155);
    }

    .dragHere {
        position: absolute;

        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 100%;

        font-size: 12px;

        color: rgb(155, 155, 155);
        
    }
    .dropArea{
        border: 2px solid black;
        display: flex;
        text-align: center;

        position: relative;

        padding: 0px;

        aspect-ratio: 1/1;

        background-color: #f2f2f2;

        min-width: 100px;
        min-height: 100px;
        max-width: 100px;
        max-height: 100px;
    }
    .dropAreaClear:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}
    .dropAreaClear {

        border: 2px dotted black;
        display: flex;
        text-align: center;

        position: relative;

        padding: 0px;

        aspect-ratio: 1/1;

        min-width: 100px;
        min-height: 100px;
        max-width: 100px;
        max-height: 100px;

    }

</style>
