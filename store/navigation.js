import { defineStore } from "pinia";

import navigation from "@/data/navigation.json";

export const navigationHeaderStore = defineStore ("navigationHeader", {
    state: () => { 
        return {
            navigation,
        }
    }
})
