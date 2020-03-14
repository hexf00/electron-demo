<template>
  <div class="about">
    <h1>{{content}}</h1>
  </div>
</template>

<script>
import fs from 'fs'
import path from 'path'
import Vue from 'vue'

const content = fs.readFileSync(path.join(__static, 'about.txt'))

export default Vue.extend({
  data() {
    return {
      content
    }
  }
})

</script>
