import { RawPlayerData } from "src/api/players";

export class Player {
    public name: string;
    public alias: string;
    public asset: string;

    constructor({ name, alias, asset }: RawPlayerData) {
        this.name = name;
        this.alias = alias;
        this.asset = asset;
    }
}
