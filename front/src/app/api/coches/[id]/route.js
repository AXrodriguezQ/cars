import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET( req, {params} ) {
    const carro = await prisma.coches.findUnique({
        where: {
            id: Number(params.id)
        }
    })
    return NextResponse.json(carro) 
}
