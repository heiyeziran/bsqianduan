<template>
  <div>
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="3000"
                img-width="1524"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd">
      <!-- Slides with image only -->
      <b-carousel-slide v-for="image in imageList" :key="image.id"
                        :img-src="image.url">
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        imageList: [
          {
            "id": 1,
            "url": "http://p1.meituan.net/mmc/a17d8c1c7cef60828a51dec6dd0162cf61611.jpg"
          },
          {
            "id": 2,
            "url": "http://p1.meituan.net/mmc/d436a965a2ad207b754064740b0b981164468.jpg"
          },
          {
            "id": 3,
            "url": "http://p0.meituan.net/mmc/9352c87ad8fba562088289366fe78680200736.jpg"
          },
          {
            "id": 4,
            "url": "http://p1.meituan.net/mmc/11cb6ffc62537bef62de0a1bc60aec0b135287.jpg"
          }
        ]
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style scoped>

</style>
