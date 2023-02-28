<template>
    <i class="icon__wrapper">
	    <Icon :name="props.iconName" />
    </i>
</template>

<script setup>
    const props = defineProps({
        iconName: {
            type: String,
            default: "mdi:emoticon-cool-outline"
        }
    })
</script>

<style scoped>
    .icon__wrapper{
        display: initial;
    }
</style>