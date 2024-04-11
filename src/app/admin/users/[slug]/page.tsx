import React from 'react'
import UserTable from '../table/UserTable'

export default function UsersPage({ params }: { params: { slug: string } }) {
    return (
        <div className='pt-4 pb-4 bg-white'>
            <UserTable type={params.slug} />
        </div>
    )
}
