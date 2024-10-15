export class BasePagination<Type> {
    
    public data: Type[];
    public currentPage: Number;
    public totalPagess: Number;
    public hasNext: Boolean;
    public hasPrevious: Boolean;

    constructor(data, currentPage, totalPages) {
        this.data = data;
        this.currentPage = Number(currentPage);
        this.totalPagess = totalPages;
        this.hasNext = currentPage < totalPages;
        this.hasPrevious = currentPage > 1;
    }
}