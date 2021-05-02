<template>
  <w-dialog
    v-model="isDeleteModalShow"
    title=""
    persistent
    :width="550"
  >
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
    quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
    odit dolor labore eveniet at vel sequi nostrum.<br><br>
    Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
    dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
    aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.

    <template #actions>
      <div class="spacer" />
      <w-button
        class="mr2"
        bg-color="error"
        @click="dialog.show = false"
      >
        I disagree
      </w-button>
      <w-button
        bg-color="success"
        @click="dialog.show = false"
      >
        I agree
      </w-button>
    </template>
  </w-dialog>
</template>

<script setup props>
import { comreactive } from 'vue';
</script>