import {individuals} from "@/utils/db"
import { NextResponse } from "next/server";


export function GET(){
    const data = individuals;
    return NextResponse.json(data,{status:200});
}


// export async function POST(request){
//     let payload= await request.json
//      console.log(payload.name)
// if(!payload.name||!payload.age||!payload.email||!payload.company||!payload.jobRole||!payload.id){
// return NextResponse.json({result:"required fields not found",success:false})
// }
//     return NextResponse.json({result:"hello"});
// }