<template>
    <div class="container">
        <div class="text">
            <h1>
                H1 Heading
            </h1>
            <h2>
                H2 Heading
            </h2>
            <h3>
                H3 Heading
            </h3>
            <h4>
                H4 Heading
            </h4>
            <h5>
                H5 Heading
            </h5>
            <h6>
                H6 Heading
            </h6>
            <p>
                Paragraph
            </p>
            <small>
                Small
            </small>
        </div>
        <div class="buttons">
            <div>
                <AppIcon iconName="ph:shopping-cart-duotone" iconSize="small" />
                <AppIcon iconName="ph:shopping-cart-duotone" />
                <AppIcon iconName="ph:shopping-cart-duotone" iconSize="medium" />
                <AppIcon iconName="ph:shopping-cart-duotone" iconSize="large" />
            </div>
            <div>
                <AppIcon iconSize="small" />
                <AppIcon />
                <AppIcon iconSize="medium" />
                <AppIcon iconSize="large" />
            </div>
            <div>
                <AppButton buttonSize="small">Button</AppButton>
                <AppButton>Button</AppButton>
                <AppButton buttonSize="medium">Button</AppButton>
                <AppButton buttonSize="large">Button</AppButton>
            </div>
            <div>
                <AppButton buttonLink="/Login">Default</AppButton>
                <AppButton buttonLink="/Login" class="link">Link</AppButton>
                <AppButton buttonLink="/Login" class="primary">Primary</AppButton>
                <AppButton class="secondary">Secondary</AppButton>
                <AppButton class="outline">Outline Default</AppButton>
                <AppButton class="outline primary">Outline Primary</AppButton>
                <AppButton class="outline secondary">Outline Secondary</AppButton>
            </div>
        </div>
        <div>
            <nuxt-img 
                src="/pexels/photos/14446665/pexels-photo-14446665.jpeg"
                sizes="sm:100px md:200px lg:300px xl:400px xxl:500px"
                format="webp"
            />
        </div>
        <div>
            <ul class="colors" >
                <li v-for="color in 8">
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;

        @media(max-width:$br_tablet){
            grid-template-columns: 1fr;
        }
        .buttons{
            div{
                * + *{
                    margin: 0 0 12px 12px;
                }
            } 
        }
        .colors{
            display: grid;
            grid-template-columns: 1fr 1fr;
            li{
                height: 60px;
                &:nth-child(1){
                    background-color: var(--primary_color);
                    filter: brightness(0.8);
                }
                &:nth-child(2){
                    background-color: var(--secondary_color);
                    filter: brightness(0.8);
                }
                &:nth-child(3){
                    background-color: var(--primary_color);
                }
                &:nth-child(4){
                    background-color: var(--secondary_color);
                }
                &:nth-child(5){
                    background-color: var(--primary_color);
                    opacity: 0.4;
                }
                &:nth-child(6){
                    background-color: var(--secondary_color);
                    opacity: 0.4;
                }
                &:nth-child(7){
                    background-color: var(--pure_black);
                }
                &:nth-child(8){
                    background-color: var(--pure_white);
                }
            }
        }
    }
</style>