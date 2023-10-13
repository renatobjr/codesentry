<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<script setup>
  import { useRoute, RouterView } from 'vue-router';
  import { computed, onBeforeMount } from 'vue';
  import Base from './layouts/default/Base.vue';
  import Login from './layouts/default/Login.vue';

  let route;
  onBeforeMount(() => {
    route = useRoute();
  })

  const layout = computed(() => {
    let currentLayout = Base;
    if (route.meta.layout === 'login') {
      currentLayout = Login;
    }

    return currentLayout;
  })

</script>
