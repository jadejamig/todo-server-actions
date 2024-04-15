import { revalidatePath } from 'next/cache';
import prisma from './db';
import FormButton from './FormButton';

const AddForm = () => {

    async function createTodo(data: FormData) {
        "use server"
    
        const title = data.get('title')?.valueOf()
        if (typeof title !== 'string' || title.length === 0)
            return
    
        await prisma.todo.create({
            data: {title}
        })
        
        revalidatePath('/')
    }

    return (
        <form action={createTodo}>
            <input 
                type='text'
                placeholder='new todo'
                name='title'
                id='title'
            />
            <FormButton/>
        </form>
    )
}

export default AddForm