<template>
    <div class="container">
        <p class="">Hello</p>
    </div>
</template>

<script>
export default {
  name: "IndexPage",
  created(){
    console.log(process.env.BASE_URL);
  }
};

</script>
