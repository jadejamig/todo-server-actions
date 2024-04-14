"use server"

import { revalidatePath } from "next/cache"
import prisma from "./db"

export async function toggleTodo(id: string, complete: boolean) {
    await prisma.todo.update({
        where: { id: id},
        data: { complete: complete }
    })

    revalidatePath('/')
}

export async function getDate() {
    const date = new Date().getTime()
    return date;
}