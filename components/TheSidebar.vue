<template>
    <aside class="sidebar" :class="{active : expandedSidebar}">
        <header>
            TheLogo
            <button class="expand-button" @click="openSidebar">
                <AppIcon iconName="ph:caret-right-bold" />
            </button>
        </header>
        <AppSidebarNavigation />
        <footer>
            Develop by...
        </footer>
    </aside>
</template>

<script setup>
    const expandedSidebar = ref(false)

    function openSidebar(){
        expandedSidebar.value = !expandedSidebar.value
        console.log("value:"+expandedSidebar.value)
    }
</script>

<style lang="scss" scoped>
    .sidebar{
        width: 100px;
        display: flex;
        flex-direction: column;
        background-color: var(--neutral_color);
        header{
            display: flex;
            justify-content: space-between;
            padding: 20px;
            .expand-button{
                background-color: transparent;
                border: 0;
                transform: rotate(0);
                padding: 0;
            }
        }
        nav{
            flex-grow: 1;
        }
        footer{
            opacity: 0;
        }
        &.active{
            width: 200px;
            header{
                .expand-button{
                    transform: rotate(180deg);
                }
            }
            footer{
                opacity: 1;
            }
        }
    }
</style>