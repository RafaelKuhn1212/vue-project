import { ref } from 'vue';
import dropArea from './components/dropArea.vue';
import box from './components/box.vue';
import { defineComponent } from 'vue';
import { VueDraggableNext } from 'vue-draggable-next';

export default await (async () => {
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
interface DropArea {
id: number;
box?: {
id: number;
text: string;
};
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
]);

const startDrag = (evt: any, item: any) => {
evt.dataTransfer.dropEffect = 'move';
evt.dataTransfer.effectAllowed = 'move';
evt.dataTransfer.setData('itemID', item.id);
};
const onDrop = (evt: any, item: any) => {
const itemID = evt.dataTransfer.getData('itemID');
const dropAreaID = item.id;

boxes.value = boxes.value.filter((item: any) => item.id != itemID);
let box = boxes.value.find((item: any) => item.id == itemID);

dropArea.map((item: any) => {
if (item.id == dropAreaID) {
item.box = { id: itemID, text: box?.text };
}
});

console.log(itemID, dropAreaID);
};

let boxes = ref([
{ id: 1, text = "a" },
{ id: 2, text = "b" }
]);


const __VLS_componentsOption = {
draggable: VueDraggableNext,
};

let __VLS_name!: 'App';
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'dropArea', typeof __VLS_localComponents, "DropArea", "dropArea", "dropArea"> &
__VLS_WithComponent<'box', typeof __VLS_localComponents, "Box", "box", "box">;
({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div;
__VLS_components.DropArea; __VLS_components.dropArea;
// @ts-ignore
[dropArea,];
__VLS_components.Box; __VLS_components.Box; __VLS_components.box; __VLS_components.box;
// @ts-ignore
[box, box,];
{
const __VLS_0 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_2 = __VLS_1({ ...{}, class: ("left"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, class: ("left"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_7 = __VLS_6({ ...{}, class: ("dragarea"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, class: ("dragarea"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_12 = __VLS_11({ ...{}, class: ("wrapper"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, class: ("wrapper"), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
for (const [item] of __VLS_getVForSourceType((__VLS_ctx.dropAreas)!)) {
{
const __VLS_15 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_17 = __VLS_16({ ...{}, class: ("list"), key: ((item.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, class: ("list"), key: ((item.id)), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
{
let __VLS_20!: 'DropArea' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.DropArea : 'dropArea' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.dropArea : (typeof __VLS_resolvedLocalAndGlobalComponents)['dropArea'];
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{ onDragover: {} as any, onDragenter: {} as any, onDrop: {} as any, }, number: ((item.id)), "box?": ((item.box)), }));
({} as { dropArea: typeof __VLS_20; }).dropArea;
const __VLS_22 = __VLS_21({ ...{ onDragover: {} as any, onDragenter: {} as any, onDrop: {} as any, }, number: ((item.id)), "box?": ((item.box)), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{ onDragover: {} as any, onDragenter: {} as any, onDrop: {} as any, }, number: ((item.id)), "box?": ((item.box)), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
let __VLS_25 = { 'dragover': __VLS_pickEvent(__VLS_24['dragover'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_21, typeof __VLS_22>).onDragover) };
__VLS_25 = {
dragover: () => { }
};
let __VLS_26 = { 'dragenter': __VLS_pickEvent(__VLS_24['dragenter'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_21, typeof __VLS_22>).onDragenter) };
__VLS_26 = {
dragenter: () => { }
};
let __VLS_27 = { 'drop': __VLS_pickEvent(__VLS_24['drop'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_21, typeof __VLS_22>).onDrop) };
__VLS_27 = {
drop: $event => {
__VLS_ctx.onDrop($event, item);
}
};
}
(__VLS_18.slots!).default;
}
// @ts-ignore
[dropAreas, onDrop,];
}
(__VLS_13.slots!).default;
}
(__VLS_8.slots!).default;
}
(__VLS_3.slots!).default;
}
{
const __VLS_28 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_29 = __VLS_elementAsFunctionalComponent(__VLS_28);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_30 = __VLS_29({ ...{}, class: ("right"), }, ...__VLS_functionalComponentArgsRest(__VLS_29));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_28, typeof __VLS_30> & Record<string, unknown>) => void)({ ...{}, class: ("right"), });
const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_28, __VLS_30)!;
let __VLS_32!: __VLS_NormalizeEmits<typeof __VLS_31.emit>;
{
const __VLS_33 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_34 = __VLS_elementAsFunctionalComponent(__VLS_33);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_35 = __VLS_34({ ...{}, class: ("dragarea"), }, ...__VLS_functionalComponentArgsRest(__VLS_34));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_33, typeof __VLS_35> & Record<string, unknown>) => void)({ ...{}, class: ("dragarea"), });
const __VLS_36 = __VLS_pickFunctionalComponentCtx(__VLS_33, __VLS_35)!;
let __VLS_37!: __VLS_NormalizeEmits<typeof __VLS_36.emit>;
{
const __VLS_38 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_39 = __VLS_elementAsFunctionalComponent(__VLS_38);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_40 = __VLS_39({ ...{}, class: ("wrapper"), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_38, typeof __VLS_40> & Record<string, unknown>) => void)({ ...{}, class: ("wrapper"), });
const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40)!;
let __VLS_42!: __VLS_NormalizeEmits<typeof __VLS_41.emit>;
for (const [item] of __VLS_getVForSourceType((__VLS_ctx.boxes)!)) {
{
const __VLS_43 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_44 = __VLS_elementAsFunctionalComponent(__VLS_43);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_45 = __VLS_44({ ...{}, class: ("list"), key: ((item.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_44));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_43, typeof __VLS_45> & Record<string, unknown>) => void)({ ...{}, class: ("list"), key: ((item.id)), });
const __VLS_46 = __VLS_pickFunctionalComponentCtx(__VLS_43, __VLS_45)!;
let __VLS_47!: __VLS_NormalizeEmits<typeof __VLS_46.emit>;
{
let __VLS_48!: 'Box' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Box : 'box' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.box : (typeof __VLS_resolvedLocalAndGlobalComponents)['box'];
const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ ...{ onDragstart: {} as any, }, text: ((item.text)), draggable: ("true"), }));
({} as { box: typeof __VLS_48; }).box;
({} as { box: typeof __VLS_48; }).box;
const __VLS_50 = __VLS_49({ ...{ onDragstart: {} as any, }, text: ((item.text)), draggable: ("true"), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_48, typeof __VLS_50> & Record<string, unknown>) => void)({ ...{ onDragstart: {} as any, }, text: ((item.text)), draggable: ("true"), });
const __VLS_51 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50)!;
let __VLS_52!: __VLS_NormalizeEmits<typeof __VLS_51.emit>;
let __VLS_53 = { 'dragstart': __VLS_pickEvent(__VLS_52['dragstart'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_49, typeof __VLS_50>).onDragstart) };
__VLS_53 = {
dragstart: $event => {
__VLS_ctx.startDrag($event, item);
}
};
}
(__VLS_46.slots!).default;
}
// @ts-ignore
[boxes, startDrag,];
}
(__VLS_41.slots!).default;
}
(__VLS_36.slots!).default;
}
(__VLS_31.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
components: {
draggable: VueDraggableNext,
},
setup() {
return {
dropArea: dropArea as typeof dropArea,
box: box as typeof box,
dropAreas: dropAreas as typeof dropAreas,
startDrag: startDrag as typeof startDrag,
onDrop: onDrop as typeof onDrop,
boxes: boxes as typeof boxes,
};
},
});
return defineComponent({
components: {
draggable: VueDraggableNext,
},
setup() {
return {};
},
});
})();
