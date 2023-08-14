<template>
  <div class="container">
    <Dasboard />
  </div>
</template>

<script>
import Dasboard from "../components/dasboard";

export default {
  name: "IndexPage",
  components: {
    Dasboard,
  },
  created() {
    console.log(process.env.BASE_URL);
  },
};
</script>
