<template>
    <nav>
        <ul>
            <li v-for="nav in navigation" :key="nav.title">
                <a v-if="externalLink" :href="nav.link" rel="noopener" target="_blank">
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
            li{
                a{
                    
                }
            }
        }
    }
</style>

<script setup>
    const navigation = [
        {link: '/', title: 'Home', externalLink: false},
        {link: 'http://google.com', title: 'Google', externalLink: true},
    ]
</script>