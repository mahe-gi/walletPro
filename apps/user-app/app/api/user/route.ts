import { NextResponse } from "next/server"

console.log("user route")   
export const GET = async () => {
    return NextResponse.json({
        message: "hi there"
    })
}