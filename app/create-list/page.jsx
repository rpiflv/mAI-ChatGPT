"use client"

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import FormList from '@components/FormList';

const CreateList = () => {

    const router = useRouter();
    const { data: session } = useSession();
    
    const [submitting, setSubmitting] = useState(false);
    const [listName, setListName] = useState("");
    
    const createList = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const response = await fetch('/api/list/new', {
                method: "POST",
                body: JSON.stringify({
                    listName: listName,
                    userId: session?.user.id
                })
            })
            if(response.ok) {
                router.push('/profile')
            }
        } catch(error) {
            console.log(error)
        } finally {
            setSubmitting(false)
        }
    }
  return (
    <FormList
        type="Create"
        listName={listName}
        setListName={setListName}
        submitting={submitting}
        handleSubmit={createList}
    />
    )
}

export default CreateList