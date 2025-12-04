import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [formData, setFormData] = useState({ emailId: "", password: "", websiteName: "" });

    const BACKENDURL = "http://localhost:5000";

    const handleSubmitForm = async () => {
        try {
            const response = await fetch(`${BACKENDURL}/createForm`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ formData })
            })

            const data = await response.json();

            if (response.ok) {
                // console.log("Form Data saved successfully");
                console.log(data.message)
            }
            else {
                // console.log("Form Data failed to saved");
                console.log(data.message)
            }
        } catch (error) {
            console.log("Error while save a form data");
        }
    }

    return (
        <div className='pt-6 bg-[#0F172A] text-gray-800 min-h-screen'>
            <form
                className="max-w-md mx-auto p-6 border border-black rounded-2xl bg-gray-400"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmitForm();
                }}>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="email"
                        name="floating_email"
                        id="floating_email"
                        value={formData.emailId}
                        onChange={(e) => setFormData({ ...formData, emailId: e.target.value })}
                        className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                        placeholder=" "
                        required />
                    <label htmlFor="floating_email" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email address / UserName</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="password"
                        name="floating_password"
                        id="floating_password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                        placeholder=" "
                        required />
                    <label htmlFor="floating_password" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="floating_website_name"
                        id="floating_website_name"
                        value={formData.websiteName}
                        onChange={(e) => setFormData({ ...formData, websiteName: e.target.value })}
                        className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                        placeholder=" "
                        required />
                    <label htmlFor="floating_website_name" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Website Name</label>
                </div>
                <button type="submit" className="text-white bg-gray-800 box-border border border-black rounded-2xl hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Submit</button>
            </form>
        </div>
    )
}

export default Form
