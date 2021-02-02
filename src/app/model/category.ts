export class Category {

    //Category1 {id:1, name: képregény, description: képregény}
    //Category2 {id:2, name: számítástechnika, description: számítástechnika}
    id: number = 0;
    name: string = '';
    description: string = '';

    constructor(properties?: Category) {
        this.id = properties.id || 0;
        this.name = properties.name || '';
        this.description = properties.description || '';
    }
}
