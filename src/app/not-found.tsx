import React from 'react'
import Link from 'next/link'


export default function NotFoundPage() {
    return (
        <div className="text-center items-center justify-center flex flex-col h-[600px]">
            <h1 className="mb-4 text-6xl font-semibold text-red-500">404</h1>
            <p className="mb-4 text-lg text-gray-600 pb-4">Oops! Looks like you&apos;re lost.</p>
            <div className="animate-bounce pt-4 pb-4">
                <svg className="mx-auto h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
            </div>
            <Link href='/'>
                <p className="mt-4 text-blue-500">Let&apos;s get you back to home.</p>
            </Link>
        </div>
    )
}
