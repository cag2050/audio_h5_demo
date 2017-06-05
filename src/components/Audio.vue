<template>
<audio controls id="audio">
    <!-- <source src="../assets/horse.ogg" type="audio/ogg"> -->
    <!-- <source src="../assets/horse.mp3" type="audio/mpeg"> -->
    您的浏览器不支持 audio 元素。
</audio>
</template>

<script>
// import horseOgg from '../assets/horse.ogg'
// import horseMp3 from '../assets/horse.mp3'

export default {
    name: 'app',
    data () {
        return {

        }
    },
    created () {
    },
    mounted () {
        console.log(111)
        console.log(document.getElementById('audio'))
        let audio = document.getElementById('audio')[0]
        audio.append('<source src="../assets/horse.mp3" type="audio/mpeg">')
    },
    methods: {

    }
}
</script>

<style>
</style>
