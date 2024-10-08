import {JsDuck} from './Duck';

export class DuckInfo {
    imageClass: string | null
    description: string | null
    hasKotlinAttribute: boolean

    constructor(duck: JsDuck) {
        this.imageClass = duck.name != "" ? "App-duck-image-" + this.duckName(duck.name) : null
        this.description = duck.description
        this.hasKotlinAttribute = duck.hasKotlinAttribute
    }

    duckName(name: String): String { return name.toLowerCase().replace(" ", "").replace(".", "") }
}
