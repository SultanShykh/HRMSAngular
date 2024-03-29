import { UserDto } from "../dtos/UserDto";

export class PagedResultDto<T>{
    items: T[] = [];
    totalCount?: number;
    pageNumber?: number;
    pageSize?: number;
    sort?: number;
}


