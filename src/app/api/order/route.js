import dbConnect from "@/utils/db";
import orderModel from "@/models/orderModel";
import {NextRequest,NextResponse} from "next/server";
import {Formidable} from 'formidable'
import { Emblema_One } from "next/font/google";


export async function POST(req, res) {
    
    try {
         await dbConnect(); 
// console.log(typeof(formData));console.log(formData);

// const data =await req.json();
//   const {email,files} = data;
const data =await req.json();
console.log(data.File);



//   console.log(email);
//   console.log(files);
        return NextResponse.json({
                   message: "Message sent successfully!"
        }, {status: 200})
    } catch (e) {
        console.log(e);
        return NextResponse.json({
            message: "Server error, please try again!"
        }, {status: 500})

    }
}