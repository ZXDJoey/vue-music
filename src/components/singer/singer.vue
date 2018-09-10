<template>
  <div class="singer">

  </div>
</template>

<script>
  import { getSingerList } from 'api/singer'
  import { ERR_OK } from 'api/config'

  const HOT_NAME = '热门'
  const HOT_SINGER_LEN = 10

  export default {
    name: 'singer',
    data() {
      return {
        singer: []
      }
    },
    created() {
      this._getSingerList()
    },
    methods: {
      _getSingerList() {
        getSingerList().then((res) => {
          if (res.code === ERR_OK) {
            this.singer = res.data.list
          }
        })
      },
      _normalizeSinger(list) {
        let map = {
          hot: {
            title: HOT_NAME,
            item: []
          }
        }

        list.forEach((item, index) => {
          if ( index < HOT_SINGER_LEN ) {
            map.hot.item.push({
              id: Fsinger_id,
              name: Fsinger_name,
              avatar: 'http://y.gtimg.cn/music/photo_new/T001R150x150M000${item.Fsinger_mid}.jpg?max_age=259200"'
            })
          }

          const key = item.Findex
          if ( !map[key] ) {
            
          }
        })
      }
    }
  }
</script>

<style scoped lang="stylus">
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>
