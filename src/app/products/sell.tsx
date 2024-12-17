import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

interface Iproducts{
    title:string,
    price:string,
    id:number
    rating?:string,
    old_price?:string
    img_url:string
}

let product:Iproducts[] = [
    {
     title:"Vertical Striped Shirt",
     id:1,
     price:"$212",
     img_url:"/sale1.png",
     old_price:"$232"
    },
    {
     title:"Courage Graphic T-Shirt",
     id:2,
     price:"$145",
     img_url:"/sale2.png",
      },
    {
     title:"Loose Fit Bermuda Shorts",
     id:3,
     price:"$80",
     img_url:"/sale3.png"
    },
    {
     title:"Faded Skinny Jeans",
     id:4,
     price:"$210",
     img_url:"/sale4.png",
    }
]
let star = [<FaStar/>,<FaStar/>,<FaStar/>,<FaStar/>,<FaStar/>]

export default function Top_sell(){
    return(
        <div className="w-full h-[500px] mt-10">
            <h1 className="text-3xl md:text-4xl font-bold text-center">TOP SELLING</h1>
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10">
                {
                    product.map((data)=>{
                        return(
                              <div key={data.id}>
                                 <Link href={`/products/${data.id}`}>
                                 <div className="w-[230px] h-[230px] bg-[#F0EEED] rounded-[20px]">
                                  <Image src={data.img_url} alt={data.title}
                                  className="w-full h-full rounded-[20px]"
                                 width={100} height={100}></Image>
                                 
                                  </div>
                                 </Link>
                                <div>
                                <p className="text-lg mt-2 font-bold">{data.title}</p>
                                <p className="flex text-yellow-400">{star}</p>
                                <p  className="font-bold mt-1">{data.price} <span className="text-gray-400 font-bold line-through"> {data.old_price} </span></p>
                                </div>
                              </div>
                        )
                    })
                }
            </div>
        </div>
    )
}