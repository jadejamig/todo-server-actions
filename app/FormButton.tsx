'use client';

import React from 'react'
import { useFormStatus } from 'react-dom';

const FormButton = () => {
    const { pending } = useFormStatus();

    return (
        <button type='submit' aria-disabled={pending}>Add</button>
    )
}

export default FormButton