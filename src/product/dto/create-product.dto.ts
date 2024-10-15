export class Images {
    readonly path: string;
}

export class CreateProductDto {
    readonly sku: string;
    readonly category_id: string;
    readonly product_name: string;
    readonly price: number;
    readonly discount: number;
    readonly thumbnail: string;
    readonly images: Images[];
}
