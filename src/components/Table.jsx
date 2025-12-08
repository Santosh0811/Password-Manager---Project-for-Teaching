import { useEffect, useState } from "react";
import React from 'react'

const Table = (props) => {

    const { BACKENDURL } = props;

    const [readData, setReadData] = useState([]);

    const handleReadForm = async () => {
        try {
            const response = await fetch(`${BACKENDURL}/readForm`, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            })

            const data = await response.json();

            if (response.ok) {
                setReadData(data.formReaddata);
            }
            else {
                console.log("Failed to fetch data");
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleReadForm();
    }, []);

    return (
        <div className='p-20'>
            <div className="relative overflow-x-auto bg-gray-400 shadow-xs rounded-2xl border border-default">
                <table className="w-full text-sm text-left rtl:text-right text-body">
                    <thead className="bg-gray-800 text-white border-b border-default">
                        <tr>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Sr No.
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Website Name
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Email Id / UserName
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Password
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            readData.map((item, index) => (
                                <tr key={item._id} className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default">
                                    <th scope="row" className="px-6 py-4">
                                        {index + 1}
                                    </th>
                                    <td className="px-6 py-4">
                                        {item.websiteName}
                                    </td>
                                    <td className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                        {item.emailId}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.password}
                                    </td>
                                    <td className="px-6 py-4 flex gap-5">
                                        <i class="fa-solid fa-pen-to-square"></i>
                                        <i class="fa-solid fa-trash"></i>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Table
