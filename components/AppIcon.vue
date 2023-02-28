<template>
	<Icon :name="props.iconName" />
</template>

<script setup>
    const props = defineProps({
        iconName: {
            type: String,
            default: "mdi:emoticon-cool-outline"
        }
    })
</script>