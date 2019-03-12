export interface PlayerType {
    name: string;
    alias: string;
    asset: string;
}

export class Player implements PlayerType {
    public name: string;
    public alias: string;
    public asset: string;


    constructor({ name, alias, asset }: PlayerType) {
        this.name = name;
        this.alias = alias;
        this.asset = asset;
    }
}
