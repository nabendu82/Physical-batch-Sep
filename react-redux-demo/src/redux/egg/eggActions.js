import { BUY_EGG } from "./eggTypes";

export function buyEgg() {
    return {
        type: BUY_EGG,
        info: 'Buying Egg'
    }
}