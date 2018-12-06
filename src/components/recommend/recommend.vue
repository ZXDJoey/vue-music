<template>
  <div class="recommend">
    <scroll class="recommend-content" :data="disclist" ref="scroll">
      <div>
        <div v-if="slider.length" class="slider-wrapper">
          <slider>
            <div v-for="item in slider" :key="item.linkUrl">
              <a :href="item.linkUrl">
                <img class="needsclick" @load="loadImage" :src="item.picUrl">
              </a>
            </div>
          </slider>
        </div>
        <div class="recommend-list">
          <div class="list-title">热门歌单推荐</div>
          <ul>
            <li class="item" v-for="item in disclist" :key="item.picUrl">
              <div class="icon">
                <img width="60" height="60" v-lazy="item.picUrl">
              </div>
              <div class="text">
                <h2 class="name" v-html="item.songListDesc"></h2>
                <p class="desc" v-html="item.songListAuthor"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="loading-container" v-show="!disclist.length">
        <loading></loading>
      </div>
    </scroll>
  </div>
</template>

<script>
  import Slider from 'base/slider/slider'
  import Scroll from 'base/scroll/scroll'
  import Loading from 'base/loading/loading'

  import { getRecommend } from 'api/recommend'
  import { ERR_OK } from 'api/config'

  export default {
    name: 'recommend',
    components: {
      Slider,
      Scroll,
      Loading
    },
    data() {
      return {
        slider: [],
        disclist: []
      }
    },
    created() {
      this._getRecommend()
    },
    methods: {
      _getRecommend() {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            this.slider = res.data.slider
            this.disclist = res.data.songList
          }
        })
      },
      loadImage() {
        if (!this.checkLoaded) {
          this.$refs.scroll.refresh()
          this.checkLoaded = true
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "~common/stylus/variable"

  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .list-title
          height: 58px
          line-height: 58px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>
