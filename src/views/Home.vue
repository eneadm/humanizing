<template>
  <Rappid />
</template>

<script>
import Rappid from '../components/Rappid'

export default {
  name: 'Home',
  components: { Rappid },
  mounted () {
    if (! localStorage?.authenticated) {

      this.$router.push('/login')
    }
  }
}
</script>
