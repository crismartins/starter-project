<template>
    <header>
        <div class="container">
            <nuxt-link to="/">
                TheLogo
            </nuxt-link>

            <AppHeaderNavigation />

            <select v-model="$colorMode.preference">      <option value="system">System</option>      <option value="light">Light</option>      <option value="dark">Dark</option>      <option value="sepia">Sepia</option>    </select>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    header{
        .container{
            padding: 20px;
            display: flex;
            justify-content: space-between;
        }
    }
</style>