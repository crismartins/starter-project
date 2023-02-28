<template>
    <div>
        <h1>
            Starter Project
        </h1>
        <p>
            some text...
        </p>
        <AppIcon iconName="mdi:air-conditioner" />
        <nuxt-img 
            src="/pexels/photos/14446665/pexels-photo-14446665.jpeg"
            sizes="sm:100vw md:50vw lg:150px xl:150px"
            format="webp"
        />
        <ul class="colors" >
            <li v-for="color in 8">
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    .colors{
        display: flex;
        li{
            // display: inline-block;
            width: 60px;
            height: 60px;
            &:nth-child(1){
                background-color: var(--primary_color);
            }
            &:nth-child(2){
                background-color: var(--secondary_color);
            }
            &:nth-child(3){
                background-color: var(--pure_black);
            }
            &:nth-child(4){
                background-color: var(--pure_white);
            }
            &:nth-child(5){
                background-color: var(--primary_color_lighter);
            }
            &:nth-child(6){
                background-color: var(--secondary_color_lighter);
            }
            &:nth-child(7){
                background-color: var(--primary_color_darker);
            }
            &:nth-child(8){
                background-color: var(--secondary_color_darker);
            }
        }
    }
</style>