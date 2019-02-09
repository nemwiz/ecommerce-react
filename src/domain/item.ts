export interface Item {
    itemId: number;
    itemName: string;
    category: string;
    pricePerPiece: number;
    qty?: number;
}