export interface INewsResponse{
    data:{
        items:INewsItem[]
        categories: ICategoryItem[]
    }
}

export interface ICategoryItem{
    id:number
}
export interface INewsItem{
    "id": string,
    "code": string,
    "title": string,
    "created_at": string,
    "type": string[]
    "page": string[]
    "image": string
}