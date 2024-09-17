


// "use client";

// import Image from "next/image";
// import { calculatePercentage } from "@/helpers";
// import FormattedPrice from "./FormattedPrice";
// import { IoIosStar } from "react-icons/io";
// import Link from "next/link";
// import { products } from "../data/product"; // Import the product data
// import Products from "./Products";

// const ProductsData = () => {
//   // Use the static array of products instead of Redux
//   const productData = products; // Fetch from the static array

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 ">
      
//       {productData.map((item) => (
//         <div key={item._id} className="w-full rounded-lg overflow-hidden">
//           <div>
//             <Link href={{ pathname: "/product", query: { _id: item?._id } }}>
//               <div className="w-full h-96 group overflow-hidden relative">
//                 <Image
//                   src={item?.image}
//                   alt="product image"
//                   width={500}
//                   height={500}
//                   className="w-full h-full object-cover group-hover:scale-110 duration-200 rounded-t-lg"
//                 />
//                 {item?.isNew && (
//                   <span className="absolute top-2 right-2 font-medium text-xs py-1 px-3 rounded-full bg-white group-hover:bg-orange-600 group-hover:text-white duration-200">
//                     New Arrival
//                   </span>
//                 )}
//               </div>

//             </Link>
//             <div className="border-[1px] border-slate-300 border-t-0 px-2 py-4 flex flex-col gap-y-2 bg-white rounded-b-lg">
//               <p>{item?.title}</p>
//               <div className="flex items-center justify-between">
//                 <div className="border-[1px] border-orange-600 py-1 px-4 rounded-full text-xs">
//                   <p>{calculatePercentage(item?.price, item?.oldPrice)}% off</p>
//                 </div>
//                 <div className="flex items-center gap-x-2">
//                   <p className="text-slate-500 line-through text-sm">
//                     <FormattedPrice amount={item?.oldPrice} />
//                   </p>
//                   <p className="font-semibold">
//                     <FormattedPrice amount={item?.price} />
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-center justify-between">
//                 {/* star icons */}
//                 <div className="flex items-center gap-x-1">
//                   {Array.from({ length: item?.rating }, (_, index) => (
//                     <span key={index} className="text-yellow-400">
//                       <IoIosStar />
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>

//   );
// };

// export default ProductsData;


"use client";

import Image from "next/image";
import { calculatePercentage } from "@/helpers";
import FormattedPrice from "./FormattedPrice";
import { IoIosStar } from "react-icons/io";
import Link from "next/link";
import { products } from "../data/product"; // Import the product data

const ProductsData = () => {
  // Use the static array of products
  const productData = products; // Fetch from the static array

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {productData.map((item) => (
        <div key={item._id} className="w-full rounded-lg overflow-hidden">
          <div>
            <Link href={{ pathname: "/product", query: { _id: item?._id } }}>
              <div className="w-full h-96 group overflow-hidden relative">
                <Image
                  src={item?.image}
                  alt="product image"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-110 duration-200 rounded-t-lg"
                />
                {item?.isNew && (
                  <span className="absolute top-2 right-2 font-medium text-xs py-1 px-3 rounded-full bg-white group-hover:bg-orange-600 group-hover:text-white duration-200">
                    New Arrival
                  </span>
                )}
              </div>
            </Link>
            <div className="border-[1px] border-slate-300 border-t-0 px-2 py-4 flex flex-col gap-y-2 bg-white rounded-b-lg">
              <p>{item?.title}</p>
              <div className="flex items-center justify-between">
                <div className="border-[1px] border-orange-600 py-1 px-4 rounded-full text-xs">
                  <p>{calculatePercentage(item?.price, Number(item?.oldPrice))}% off</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <p className="text-slate-500 line-through text-sm">
                    <FormattedPrice amount={Number(item?.oldPrice)} />
                  </p>
                  <p className="font-semibold">
                    <FormattedPrice amount={item?.price} />
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                {/* star icons */}
                <div className="flex items-center gap-x-1">
                  {Array.from({ length: item?.rating }, (_, index) => (
                    <span key={index} className="text-yellow-400">
                      <IoIosStar />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsData;
