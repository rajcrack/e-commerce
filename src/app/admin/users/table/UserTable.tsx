"use client";
import { LoadingContext } from '@/lib/global/context/context';
import React, { useContext, useEffect, useState } from 'react'
interface Props {
    id?: string
    name?: string
    email?: string
    password?: string
    isActive?: boolean
    phone?: string
}


export default function UserTable({ type }: { type: string }) {
    const { setter } = useContext(LoadingContext);
    const [userList, setUserList] = useState<any>([]);
    const [count, setCount] = useState<number>(0);
    const updateCount = () => {
        setCount(count + 1);
    }
    useEffect(() => {
        async function geUserList() {
            setter(true);
            console.log(type);
            const response = await fetch(`/api/admin/user?type=${type}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const { usersList } = await response.json();
            setter(false);
            setUserList(usersList);
        }
        geUserList();
    }, [count]);


    const updateActive = async (id?: string, nowActive?: boolean) => {
        setter(true);
        const response = await fetch('/api/admin/user?update=isActive', {
            method: "PUT",
            body: JSON.stringify({
                id: id,
                isActive: !nowActive
            })
        });
        const responseData = await response.json();
        setter(false);
        updateCount();
    }
    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-[90%] mx-auto bg-white text-black border">
                <table className="w-full text-sm text-left rtl:text-right dark:text-gray-400 shadow-2xl">
                    <thead className="text-xs text-gray-700 uppercase dark:text-gray-400 border-b-2 border-black pt-4 pb-4 h-[55px]">
                        <tr>
                            <th scope="col" className="px-6 py-3 dark:bg-gray-800 text-[16px] font-black">
                                Serial
                            </th>
                            <th scope="col" className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-[16px] font-black">
                                Full Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-[16px] font-black">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-[16px] font-black">
                                Mobile
                            </th>
                            <th scope="col" className="px-6 py-3 text-[16px] font-black">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3 text-[16px] font-black dark:bg-gray-800 bg-gray-100">
                                User Id
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList.map((data: Props, index: number) => (<tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                            <td className="px-6 py-4 font-bold text-[16px]">
                                {index + 1}.
                            </td>
                            <th scope="row" className="text-[16px] px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800">
                                {data.name}
                            </th>
                            <td className="px-6 py-4 text-[16px]">
                                {data.email}
                            </td>
                            <td className="px-6 py-4 bg-gray-100 dark:bg-gray-800 text-[16px]">
                                {data.phone}
                            </td>
                            <td className="px-6 py-4">
                                <span className={(data.isActive ? 'bg-green-600' : 'bg-red-600') + ' pt-[6px] pb-[6px] pl-3 pr-3 text-white rounded-full cursor-pointer'} onClick={() => updateActive(data.id, data.isActive)}>
                                    {data.isActive ? "Active" : "inactive"}
                                </span>
                            </td>
                            <td className="px-6 py-4 dark:bg-gray-800 bg-gray-100 text-[14px]">
                                {data.id}
                            </td>

                        </tr>))}

                    </tbody>
                </table>
            </div>
        </>
    )
}
