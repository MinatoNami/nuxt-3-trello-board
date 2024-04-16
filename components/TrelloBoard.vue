<script setup lang="ts">
import type { Column } from "@/types";
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
</script>

<template>
  <div>
    <draggable
      v-model="columns"
      group="columns"
      item-key="id"
      class="flex gap-4 overflow-x-auto items-start"
    >
      <template #item="{ element: column }: { element: Column }">
        <div class="column bg-gray-200 p-5 rounded min-w-[250px]">
          <header class="font-bold mb-4">{{ column.title }}</header>
          <TrelloBoardTask
            v-for="task in column.tasks"
            :task="task"
            :key="task.id"
          />
          <footer><button class="text-gray-500">+ Add a Card</button></footer>
        </div>
      </template>
    </draggable>
  </div>
</template>

<style></style>
