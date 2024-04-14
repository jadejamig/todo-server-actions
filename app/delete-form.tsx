import React from 'react'
import prisma from './db'
import { revalidatePath } from 'next/cache'

const DeleteForm = ({ id }: TodoModel) => {
    async function deleteTodo() {
        "use server"
        await prisma.todo.delete({
            where: {id: id}
        })
        revalidatePath('/')
    }

    return (
        <form action={deleteTodo}>
            <button type='submit'>Delete</button>
        </form>
    )
}

export default DeleteForm