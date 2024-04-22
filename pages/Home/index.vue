<script lang="ts" setup>
const urlButtons = {
  youtube: {
    name: "Youtube",
    url: "https://www.youtube.com/",
  },
  google: {
    name: "Google",
    url: "https://www.google.com.sg/",
  },
  home: {
    name: "Home",
    url: "https://www.localhost:3000/",
  },
  trello: {
    name: "Trello",
    url: "https://www.localhost:3000/trello",
  },
};

const iframeButtons = [
  { name: "Iframe 1", url: "https://www.google.com.sg/" },
  { name: "Iframe 2", url: "https://www.youtube.com/" },
];

const iframeLoaded1 = ref(false);
const iframeLoaded2 = ref(false);

const loadedIframe = (type: number) => {
  if (type === 1) {
    iframeLoaded1.value = true;
  } else {
    iframeLoaded2.value = true;
  }
};

const selectedUrl = ref("https://www.google.com.sg/");
const selectUrl = (url: string) => {
  selectedUrl.value = url;
};

const iframeUrl1 = ref("https://www.google.com.sg/");
const iframeUrl2 = ref("https://www.youtube.com/");

const selectedIframe = ref(1);
const selectIframe = (type: number) => {
  selectedIframe.value = type;
  if (type === 1) {
    selectedUrl.value = iframeUrl1.value;
  } else {
    selectedUrl.value = iframeUrl2.value;
  }
};

const changeIframeUrl = () => {
  if (selectedIframe.value === 1) {
    iframeUrl1.value = selectedUrl.value;
  } else {
    iframeUrl2.value = selectedUrl.value;
  }
};
</script>

<template>
  <div
    class="flex flex-col w-full h-screen p-10 gap-2 overflow-x-auto bg-black"
  >
    <div class="button-container flex gap-4">
      <button
        v-for="(item, index) in urlButtons"
        class="text-white px-4 py-2 rounded"
        :key="index"
        :value="item.url"
        :class="selectedUrl === item.url ? 'bg-blue-500' : 'bg-blue-300'"
        @click="selectUrl(item.url)"
      >
        {{ item.name }}
      </button>
      <button
        v-for="(button, index) in iframeButtons"
        :key="index"
        class="text-white px-4 py-2 rounded"
        :class="selectedIframe === index + 1 ? 'bg-blue-500' : 'bg-blue-300'"
        @click="selectIframe(index + 1)"
      >
        {{ button.name }}
      </button>
    </div>
    <div class="flex">
      <input
        type="text"
        v-model="selectedUrl"
        class="mr-2 px-4"
        style="width: 500px"
      />
      <button
        class="text-black px-4 py-2 rounded bg-gray-100"
        @click="changeIframeUrl"
      >
        Change Iframe Url
      </button>
    </div>
    <div class="iframes flex h-full gap-x-4">
      <iframe
        v-show="iframeLoaded1"
        :src="iframeUrl1"
        class="w-full h-full"
        title="Explorer"
        frameborder="0"
        @load="loadedIframe(1)"
      ></iframe>
      <iframe
        v-show="iframeLoaded2"
        :src="iframeUrl2"
        class="w-4/6 h-full"
        title="Youtube"
        frameborder="0"
        @load="loadedIframe(2)"
      ></iframe>
    </div>
  </div>
</template>

<style scoped></style>
