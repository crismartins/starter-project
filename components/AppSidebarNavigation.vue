<template>
    <nav>
        <ul>
            <li v-for="nav in navigation.navigation" :key="nav.title">
                <a target="_blank" v-if="nav.externalLink" :href="nav.link">
                    <AppIcon icon-size="medium" />
                    <span>
                        {{ nav.title }}
                    </span>
                </a>
                <nuxt-link v-else :to="nav.link">
                    <AppIcon icon-size="medium" />
                    <span>
                        {{ nav.title }}
                    </span>
                </nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<script setup>
    // import navigation from "@/data/navigation.json"
    
    import { navigationHeaderStore } from '@/store/navigation'

    // // access the `store` variable anywhere in the component ✨
    const navigation = navigationHeaderStore()
</script>

<style lang="scss" scoped>
    .sidebar{
        nav{
            ul{
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                overflow: hidden;
                li{
                    a{
                        padding: 20px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        i{
                            margin-right: 0px;
                        }
                        span{
                            transition: $default_transition;
                            opacity: 0;
                            // width: 0;
                            display: none;
                        }
                    }
                }
            }
        }
        &.active{
            ul{
                li{
                    a{
                        justify-content: flex-start;
                        i{
                            margin-right: 8px;
                        }
                        span{
                            opacity: 1;
                            // width: 100%;
                            display: block;
                        }
                    }
                }
            }
        }
    }
</style>

