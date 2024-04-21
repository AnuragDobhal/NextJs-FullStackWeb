
import User from "@/models/user";
import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"


export async function POST(req) {
 try{
    const { name, email, password } = await req.json();

// console.log("Name:",name);
// console.log("email:",email);
// console.log("password:",password);

const hashedPassword=await bcrypt.hash(password, 10)
await connectMongoDB ();

await User.create({name,email,password:hashedPassword});

    return NextResponse.json({ message: "User registered." }, { status: 201 });
 }catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
