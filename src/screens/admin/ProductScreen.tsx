import DialogBox from "@/components/DialogueComponent";
import { GlobalPropType } from "@/globalPropType";
import { useEffect, useState } from "react";

type ProductProp =  {
    "product_id": number,
    "product_name": string,
    "price": number,
    "stock": number
}
const ProductScreen = ({mutations}:GlobalPropType)=>{
    const [productsList,setProductsList] = useState<Array<ProductProp>>([]);
    const [productCreateDialog,setProductCreateDialog] = useState<boolean>(false);

    // Add Product data 
    const [productName,setProductName] = useState<string>('');
    const [productPrice,setProductPrice] = useState<string>('');
    const [productStock,setProductStock] = useState<string>('');

    const createProductAction = ()=>{
        mutations.admin.product.create({product_name:productName,price:parseInt(productPrice),stock:parseInt(productStock)})
        .then((ans)=>{
            console.log(ans.data.data);
            setProductsList([ans.data.data,...productsList]);
            setProductCreateDialog(false);

        })
        .catch((error)=>console.log(error.data));
        console.log("product : ",productName,productPrice,productStock);
    }
    useEffect(()=>{
        if(productsList.length<1){
            mutations.admin.product.get()
            .then((ans)=>{
                //ans.data.data
                setProductsList(ans.data.data);
                
            })
        }
       
    })
    return <div className="mt-8 text-center">
        <div className="text-2xl m-5 text-green-800">Product Screen</div>
        <div className="my-5" onClick={()=>setProductCreateDialog(true)}>Create Product <span className="text-xl">+</span></div>
        <div>{productsList.map(({product_name,product_id,stock,price}:ProductProp)=>{
                return <div key={product_id} className="w-[50%] mx-auto bg-green-200 p-[10px] mb-[10px] ">
                    <div className="flex flex-row justify-between items-center text-green-800">
                        <div>{product_name}</div>
                        <div>{price}<span className="ml-2">Yen</span></div>                        
                    </div>
                    <div className="text-green-500 text-left">stock: <span className="ml-2">{stock}</span></div>
                </div>
             })}
             </div>
             <DialogBox open={productCreateDialog} setOpen={setProductCreateDialog} >               
                <div className="p-[30px]"> 
                    <div className="text-center font-bold">Create New Product</div>
                    <div className="flex flex-row items-center mb-[10px]">
                        <div>Product Name</div>
                        <input value={productName} onChange={(event)=>setProductName(event.target.value)} className="flex-1 border-[1px] border-gray-500 ml-[30px]"/>
                    </div>
                    <div className="flex flex-row items-center mb-[10px]">
                        <div>Product Price</div>
                        <input value={productPrice} onChange={(event)=>setProductPrice(event.target.value)} className="flex-1 border-[1px] border-gray-500 ml-[30px]"/>
                    </div>
                    <div className="flex flex-row items-center mb-[10px]">
                        <div>Product Stock</div>
                        <input value={productStock} onChange={(event)=>setProductStock(event.target.value)} className="flex-1 border-[1px] border-gray-500 ml-[30px]"/>
                    </div>
                    <button onClick={createProductAction} className="flex flex-row w-full justify-center px-5 bg-blue-500 text-black">Add Product</button>
                </div>
            </DialogBox>
    </div>
}
export default ProductScreen;