<template>
    <div class="body__container">
        <TheSidebar />
        <section>
            <TheHeader />
            <main>
                <slot />
            </main>
            <TheFooter />
        </section>
    </div>
</template>

<style lang="scss" scoped>
    .body__container{
        min-height: 100vh;
        display: flex;
        @media(max-width:$br_tablet){
            flex-direction: column;
            flex-flow: column-reverse;
        }
        section{
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            main{
                flex-grow: 1;
            }
        }
    }
</style>