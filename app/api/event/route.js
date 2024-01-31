import { NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";
import p from '../../../lib/prismadb'
export const GET=async()=>{
    // const p=new PrismaClient()
    try{const evs=await p.event.findMany()
    return new NextResponse(JSON.stringify( evs,{status:'200'}))
    }
    catch(error){
        return new NextResponse(error,{status:'500'})
    }
    
}