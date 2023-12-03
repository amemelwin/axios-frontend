import DialogBox from "@/components/DialogueComponent";
import LoginInput from "@/components/common/LoginInputComponent";
import SizeBox from "@/components/common/SizeBox";
import { GlobalPropType } from "@/globalPropType";
import { ProductCreateErrType, ProductType } from "@/types/product/productType";
import { useEffect, useState } from "react";

const ProductScreen = ({mutations}:GlobalPropType)=>{
    const [productsList,setProductsList] = useState<Array<ProductType>>([]);
    const [productCreateDialog,setProductCreateDialog] = useState<boolean>(false);

    // Add Product Modal
    const [productName,setProductName] = useState<string>('');
    const [productNameErr,setProductNameErr]= useState<string>('');
    const [productPrice,setProductPrice] = useState<string>('');
    const [productPriceErr,setProductPriceErr] = useState<string>('');
    const [productStock,setProductStock] = useState<string>('');
    const [productStockErr,setProductStockErr] = useState<string>('');
    const [errMsg,setErrMsg] = useState<string>('');

    const createProductAction = ()=>{
        setErrMsg('');
        setProductNameErr('');
        setProductPriceErr('');
        setProductStockErr('');
        mutations.admin.product.create({price:parseInt(productPrice),product_name:productName, stock:parseInt(productStock)})
        .then((ans)=>{
           setProductsList([ans,...productsList]);
            setProductCreateDialog(false);
        })
        .catch((err:ProductCreateErrType)=>{
            setErrMsg(err.message);
            if(err.errors){
                if(err.errors.product_name){
                    setProductNameErr(err.errors.product_name);
                }
                if(err.errors.price){
                    setProductPriceErr(err.errors.price);
                }
                if(err.errors.stock){
                    setProductStockErr(err.errors.stock);
                }
            }
            

        })
    }

    const addCartAction = (productId:number)=>{
       console.log(productId);
    }

    useEffect(()=>{
        if(productsList.length<1){
            mutations.user.product.get()
            .then((ans)=>{
                setProductsList(ans);
            })
        }
        
       
    })
    return <div className="mt-8 text-center">
        <div className="text-2xl m-5 text-green-800">Product Screen</div>
        <div className="my-5" onClick={()=>setProductCreateDialog(true)}>Create Product <span className="text-xl">+</span></div>
        <div>{productsList.map(({product_name,product_id,stock,price}:ProductType)=>{
                return <div  key={product_id} className="flex flex-row items-center w-[50%] mx-auto">
                    <div className="flex-1 bg-green-200 p-[10px] mb-[10px] ">
                    <div className="flex flex-row justify-between items-center text-green-800">
                        <div>{product_name}</div>
                        <div>{price}<span className="ml-2">Yen</span></div>                        
                    </div>
                    <div className="text-green-500 text-left">stock: <span className="ml-2">{stock}</span></div>
                </div>
                <div onClick={()=>addCartAction(product_id)} className=" text-green-500">Add To Cart</div>
                </div>
             })}
             </div>
             <DialogBox open={productCreateDialog} setOpen={setProductCreateDialog} >               
                <div className="p-[30px]"> 
                    <div className="text-center font-bold">Create New Product</div>
                    <SizeBox h={20}/>
                    {errMsg && <div className="text-red-500 text-sm text-center">{errMsg}</div>}
                    <SizeBox h={20}/>
                    <LoginInput
                        value={productName}
                        setValue={setProductName}
                        id="product-name"
                        errMsg={productNameErr}
                        label="Product Name"
                        type="text" 
                    />
                    <SizeBox h={20}/>
                    <LoginInput
                        value={productPrice}
                        setValue={setProductPrice}
                        id="product-price"
                        errMsg={productPriceErr}
                        label="Product Price"
                        type="text" 
                    />
                    <SizeBox h={20}/>
                    <LoginInput
                        value={productStock}
                        setValue={setProductStock}
                        id="product-stock"
                        errMsg={productStockErr}
                        label="Product Stock"
                        type="text" 
                    />
                    <SizeBox h={20}/>
                    <button onClick={createProductAction} className="flex flex-row w-full justify-center px-5 bg-blue-500 text-black">Add Product</button>
                </div>
            </DialogBox>
    </div>
}
export default ProductScreen;