<template>
  <div>
    <div>
      <ProfileBanner></ProfileBanner>
    </div>
    <div class="baseStyle">
      <h3>关于(About)</h3>
    </div>
  </div>
</template>

<script>
  import ProfileBanner from "../../components/Client/Content/Banner/ProfileBanner";
  export default {
    name: "Profile",
    components: {ProfileBanner}
  }
</script>

<style scoped>

</style>