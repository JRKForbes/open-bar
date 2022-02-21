<template>
  <div class="drink">
    {{type}} | DKK {{price}}
  </div>
</template>

<script>
export default{
  name: 'DrinkOption',
  props: {
    type: String,
    price: Number
  }
}
</script>

<style scoped>

</style>
