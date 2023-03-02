<template>
    <nav>
        <ul>
            <li v-for="nav in navigation.navigation" :key="nav.title">
                <a target="_blank" v-if="nav.externalLink" :href="nav.link">
                    {{ nav.title }}
                </a>
                <nuxt-link v-else :to="nav.link">
                    {{ nav.title }}
                </nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
    nav{
        ul{
            display: flex;
            flex-wrap: wrap;
            li{
                a{
                    padding: 20px;
                }
            }
        }
    }
</style>

<script setup>
    // import navigation from "@/data/navigation.json"
    
    import { navigationHeaderStore } from '@/store/navigation'

    // // access the `store` variable anywhere in the component ✨
    const navigation = navigationHeaderStore()
</script>