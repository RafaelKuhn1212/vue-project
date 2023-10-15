<script setup lang="ts">
import { ref } from 'vue'
import dropArea from './components/dropArea.vue';
import box from './components/box.vue';

interface DropArea {
  id: number
  box?: {
    id: number
    text: string
  }
}

let dropAreas = ref<DropArea[]>([
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },

])

const startDrag = (evt:any, item:any) => {
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
  if(item.box){
      evt.dataTransfer.setData('itemID', item.box.id)
  }else
      evt.dataTransfer.setData('itemID', item.id)
}
const onDrop = (evt:any, item:any) => {

      const itemID = evt.dataTransfer.getData('itemID')
      const dropAreaID = item.id
      let box = boxes.value.find((item:any) => item.id == itemID)
      let dropArea = dropAreas.value.find((item:any) => item.id == dropAreaID)

      if(item == 'boxes'){
        const drop = dropAreas.value.filter((item:any) => {
          if(item.box){
            return item.box.id == itemID
          }
        })[0]
        if(drop){
          if(drop.box){
            boxes.value.push({
              id: drop.box.id,
              text: drop.box.text
            })
          }
        }else{
          return
        }
dropAreas.value = dropAreas.value.map((item:any) => {
      if(item.box?.id == itemID){
        return {id: item.id}
      }
      return item
    })
        return
}

      if(dropArea?.box){
        return
      }

      if(dropAreas.value.filter((item:any) => {
        if(item.box){

          return item.box.id == itemID
        }
        return false
      }).length > 0){

        const box = dropAreas.value.find((item:any) => item.box?.id == itemID)?.box

        dropAreas.value = dropAreas.value.map((item:any) => {
          if(item.box?.id == itemID){
            return {id: item.id}
          }
          return item
        })

        dropAreas.value = dropAreas.value.map((item:any) => {
        if(item.id == dropAreaID){
          return {id: item.id, box:{
            id: box?.id,
            text: box?.text
          }}
        }
        return item
      })

      }else{

      boxes.value = boxes.value.filter((item:any) => item.id != itemID)

      dropAreas.value = dropAreas.value.map((item:any) => {
        if(item.id == dropAreaID){
          return {id: item.id, box:{
            id: box?.id,
            text: box?.text
          }}
        }
        return item
      })
    }
}

const boxes = ref([

  { id: 1,text:"a" },
  { id: 2,text:"b" },
  { id: 3,text:"c" },
  { id: 4,text:"d" },
  { id: 5,text:"e" },
  { id: 6,text:"f" },
  { id: 7,text:"g" },
  { id: 8,text:"h" },


])

</script>

<template>
  <div class="left">
    
    <div class="dragarea">
      <div class="wrapper">

        <div class="list" v-for="item in dropAreas" :key="item.id">
          <dropArea :number="item.id" 
  @dragover.prevent
  @dragenter.prevent
  @dragstart="startDrag($event, item)"
  @drop="onDrop($event, item)" :box="item.box"></DropArea>
        </div>
        
      </div>
    </div>
  </div>

  <div class="right" @drop="onDrop($event, 'boxes')" @dragover.prevent
  @dragenter.prevent>
    <div class="dragarea">
      <div class="wrapper" >

        <div class="list" v-for="item in boxes" :key="item.id" >
          <box :text="item.text" draggable="true"  @dragstart="startDrag($event, item)"></box>
        </div>
        
      </div>
    </div>
  </div>
<!-- <dropArea :number="1" :box="{id:1,text:'aaaaa'}"></DropArea> -->
</template>

<style>

.right{
  display: flex;

  align-items: center;
  justify-content: center;
  height: 80vh;
  margin-top: 10vh;
  margin-bottom: 10vh;
  margin-right: 40px;
}

.div
html {
  max-width: 1980px;
  margin: 0 auto;
  height: 100%;
}

body {
  font-family: Arial sans-serif;
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 1980px;
  min-height: 100%;
  display: flex;
  justify-content: stretch;
  align-items: stretch;
}

#app {
  padding: 0%;
  margin: 0%;
  width: 100%;
  height: 100%;
}

.dragArea {
  display: grid;

  align-content: center;
  width: 100%;
  height: 100%;
}

.wrapper {
  display: grid;

  grid-gap: 3px;

  flex-direction: column;
  justify-content: center;

  grid-template-columns: fit-content(100px) fit-content(100px) fit-content(100px) fit-content(100px);

  grid-auto-rows: 100px;

  align-items: center;
  width: 100%;
  height: 100%;
}

.left {
  display: flex;

  align-items: center;
  justify-content: center;
  height: 80vh;
  margin-top: 10vh;
  margin-bottom: 10vh;
  margin-left: 40px;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'
import DropArea from './components/dropArea.vue';

export default defineComponent({
  components: {
    draggable: VueDraggableNext,
  }
})
</script>