import {individuals} from "@/utils/db"
import { NextResponse } from "next/server";


export function GET(){
    const data = individuals;
    return NextResponse.json(data,{status:200});
}