<template>
    <i class="icon__wrapper">
	    <Icon :name="props.iconName" :class="`icon-size__${props.iconSize}`" />
    </i>
</template>

<script setup>
    const props = defineProps({
        iconName: {
            type: String,
            default: "mdi:emoticon-cool-outline"
        },
        iconSize: {
            type: String,
            default: "default"
        },
    })
</script>

<style lang="scss" scoped>
    .icon__wrapper{
        display: initial;
        .icon-size{
            &__default{
                font-size: $size_16px;
            }
            &__small{
                font-size: $size_small;
            }
            &__medium{
                font-size: $size_medium;
            }
            &__large{
                font-size: $size_large;
            }
        }
    }
</style>