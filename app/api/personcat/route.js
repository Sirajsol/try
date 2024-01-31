import { NextResponse } from "next/server";
import pp from '../../../lib/prismadb'
export const GET =async(req)=>{
    try{
const ca=await pp.personCat.findMany()
return new NextResponse(JSON.stringify(ca,{status:'200'}))
    }
    catch(error){
        return new NextResponse(JSON.stringify(error,{status:'500'}))
    }
}