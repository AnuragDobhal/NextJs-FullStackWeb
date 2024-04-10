import {productData} from "@/utils/productDataApi"
import { NextResponse } from "next/server";


export function GET(){
    const data = productData;
    return NextResponse.json(data,{status:200});
}