import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET () {

    const coches = await prisma.coches.findMany()

    return NextResponse.json(coches)
}