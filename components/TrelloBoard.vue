<script setup lang="ts">
import type { Column, Task } from "@/types";
import { nanoid } from "nanoid";
import draggable from "vuedraggable";
const columns = ref<Column[]>([
  {
    id: nanoid(),
    title: "Backlog",
    tasks: [
      {
        id: nanoid(),
        title: "Create marketing landing page",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(),
        title: "Add new section: Testimonials",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  },
  { title: "Selected for Development", id: nanoid(), tasks: [] },
  { title: "In Progress", id: nanoid(), tasks: [] },
  { title: "QA", id: nanoid(), tasks: [] },
  { title: "Complete", id: nanoid(), tasks: [] },
]);

const alt = useKeyModifier("Alt");
const handlePull = () => {
  const temp = alt.value ? "clone" : true;
  return temp;
};
</script>

<template>
  <div>
    <draggable
      v-model="columns"
      group="columns"
      item-key="id"
      :animation="150"
      handle=".drag-handle"
      class="flex gap-4 overflow-x-auto items-start"
    >
      <template #item="{ element: column }: { element: Column }">
        <div class="column bg-gray-200 p-5 rounded min-w-[250px]">
          <header class="font-bold mb-4">
            <DragHandle />
            {{ column.title }}
          </header>
          <draggable
            v-model="column.tasks"
            :group="{ name: 'tasks', pull: handlePull }"
            item-key="id"
            :animation="150"
            handle=".drag-handle"
          >
            <template #item="{ element: task }: { element: Task }">
              <div><TrelloBoardTask :task="task" /></div>
            </template>
          </draggable>
          <footer><NewTask @add="column.tasks.push($event)" /></footer>
        </div>
      </template>
    </draggable>
  </div>
</template>

<style>
.sortable-drag .task {
  transform: rotate(5deg);
}

.sortable-ghost .task {
  position: relative;
}

.sortable-ghost .task::after {
  content: "";
  @apply absolute top-0 bottom-0 left-0 right-0 bg-slate-300 rounded;
}
</style>
