export type ProductType =  {
    product_id: number;
    product_name: string;
    price: number;
    stock: number;
    created_at: string;
    updated_at: string;
}

export type ProductCreateReq = {
    price: number,
    stock: number,
    product_name: string
}

export type ProductCreateErrType = {
    code: number,
    status: string;
    message: string;
    errors?: ProductCreateErr;
}

type ProductCreateErr = {
    price?: string;
    stock?: string;
    product_name?: string;
}

export type ProductDeleteResponseType = {
    status: string;
    message: string;
    code: number;
}