<template>
<div>
    <vue-audio :file="file1" />
</div>
</template>

<script>
import VueAudio from 'vue-audio'

export default {
    components: {
        'vue-audio': VueAudio
    },
    data () {
        return {
            file1: 'https://shershen08.github.io/vue-plugins-demo-static/dist/sample.mp3'
        }
    }
}
</script>

<style>
</style>
