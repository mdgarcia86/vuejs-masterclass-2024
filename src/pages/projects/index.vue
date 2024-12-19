<script setup lang="ts">
import { ref } from 'vue';
import { supabase } from '@/lib/supabaseClient'
import type { Tables } from '../../../database/database.types';

const projects = ref<Tables<'projects'>[] | null>(null)

  ; (async () => {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
    if (error) console.log(error)

    projects.value = data
    console.log('Projects: ', projects.value)
  })()

</script>
<template>
  <div>
    <h1>Projects Page</h1>
    <RouterLink to="/">Go Home</RouterLink>
    <ul>
      <li v-for="project in projects" :key="project.id">
        {{ project.name }} {{ project.slug }} {{ project.status }}
      </li>
    </ul>
  </div>
</template>
