<template>
    <header>
        <div class="container__fluid">
            <nuxt-link to="/">
                TheLogo
            </nuxt-link>

            <AppHeaderNavigation />

            <div class="theme-switcher">
                <input id="theme" type="radio" v-model="$colorMode.preference" value="light" />
                <label>
                    Light
                </label>
                <input id="theme" type="radio" v-model="$colorMode.preference" value="dark" />
                <label>
                    Dark
                </label>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    header{
        .container__fluid{
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
</style>