import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

export default function ImagesPage(){
    return (<>
    <DefaultLayout>
        <main className="mx-auto w-full max-w-[1000px] border border-white">
        <Breadcrumb pageName="Images" />
     <div className="border border-green-500 m-[1px] p-[1px] flex flex-col">
     <div className="border border-pink-500 m-[1px] p-[1px] w-1/2 ">
    <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
              <h3 className="font-medium text-dark dark:text-white">
                File upload
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                  Attach file
                </label>
                <input
                  type="file"
                  className="w-full cursor-pointer rounded-[7px] border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-[#E2E8F0] file:px-6.5 file:py-[13px] file:text-body-sm file:font-medium file:text-dark-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-dark dark:border-dark-3 dark:bg-dark-2 dark:file:border-dark-3 dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                />
              </div>
            </div>
    </div>
    </div>
    </div>

    <div className="shadow-card-6 max-w-full overflow-x-auto border border-red-500 mx-[1px] my-10 p-[1px] ">
        <div className="min-w-[1170px]">
        <div className="grid grid-cols-12 rounded-t-[10px] bg-primary px-5 py-4 lg:px-7.5 2xl:px-11">
        <div className="col-span-3">
        <h5 className="font-medium text-white">Name</h5></div><div className="col-span-3">
        <h5 className="font-medium text-white">Position</h5></div><div className="col-span-3"><h5 className="font-medium text-white">Email</h5></div><div className="col-span-2"><h5 className="font-medium text-white">Role</h5></div><div className="col-span-1"><h5 className="text-right font-medium text-white">Edit</h5></div></div><div className="rounded-b-[10px] bg-white dark:bg-gray-dark"><div className="grid grid-cols-12 border-t border-[#EEEEEE] px-5 py-4 dark:border-dark-3 lg:px-7.5 2xl:px-11"><div className="col-span-3"><p className="text-[#637381] dark:text-dark-6">Musharof Chowdhury</p></div><div className="col-span-3"><p className="text-[#637381] dark:text-dark-6">Multidisciplinary Web Entrepreneur</p></div><div className="col-span-3"><p className="text-[#637381] dark:text-dark-6">musharof@example.com</p></div><div className="col-span-2"><p className="text-[#637381] dark:text-dark-6">Owner</p></div><div className="relative col-span-1"><div className=""><div><button className="float-right inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-body-sm text-dark shadow-1 hover:text-primary dark:bg-dark-2 dark:text-white dark:shadow-card">Action<svg className="fill-current" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.50039 11.4C8.35039 11.4 8.22539 11.35 8.10039 11.25L2.35039 5.60005C2.12539 5.37505 2.12539 5.02505 2.35039 4.80005C2.57539 4.57505 2.92539 4.57505 3.15039 4.80005L8.50039 10.025L13.8504 4.75005C14.0754 4.52505 14.4254 4.52505 14.6504 4.75005C14.8754 4.97505 14.8754 5.32505 14.6504 5.55005L8.90039 11.2C8.77539 11.325 8.65039 11.4 8.50039 11.4Z" fill=""></path></svg></button></div></div></div></div><div className="grid grid-cols-12 border-t border-[#EEEEEE] px-5 py-4 dark:border-dark-3 lg:px-7.5 2xl:px-11"><div className="col-span-3"><p className="text-[#637381] dark:text-dark-6">Naimur Rahman</p></div><div className="col-span-3"><p className="text-[#637381] dark:text-dark-6">Website Front-end Developer</p></div><div className="col-span-3"><p className="text-[#637381] dark:text-dark-6">naimurrahman@example.com</p></div><div className="col-span-2"><p className="text-[#637381] dark:text-dark-6">Member</p></div><div className="relative col-span-1"><div className=""><div><button className="float-right inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-body-sm text-dark shadow-1 hover:text-primary dark:bg-dark-2 dark:text-white dark:shadow-card">Action<svg className="fill-current" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.50039 11.4C8.35039 11.4 8.22539 11.35 8.10039 11.25L2.35039 5.60005C2.12539 5.37505 2.12539 5.02505 2.35039 4.80005C2.57539 4.57505 2.92539 4.57505 3.15039 4.80005L8.50039 10.025L13.8504 4.75005C14.0754 4.52505 14.4254 4.52505 14.6504 4.75005C14.8754 4.97505 14.8754 5.32505 14.6504 5.55005L8.90039 11.2C8.77539 11.325 8.65039 11.4 8.50039 11.4Z" fill=""></path></svg></button></div></div></div></div><div className="grid grid-cols-12 border-t border-[#EEEEEE] px-5 py-4 dark:border-dark-3 lg:px-7.5 2xl:px-11"><div className="col-span-3"><p className="text-[#637381] dark:text-dark-6">Shafiq Hammad</p></div><div className="col-span-3"><p className="text-[#637381] dark:text-dark-6">Regional Paradigm Technician</p></div><div className="col-span-3"><p className="text-[#637381] dark:text-dark-6">shafiq.hd@example.com</p></div><div className="col-span-2"><p className="text-[#637381] dark:text-dark-6">Moderator</p></div><div className="relative col-span-1"><div className=""><div><button className="float-right inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-body-sm text-dark shadow-1 hover:text-primary dark:bg-dark-2 dark:text-white dark:shadow-card">Action<svg className="fill-current" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.50039 11.4C8.35039 11.4 8.22539 11.35 8.10039 11.25L2.35039 5.60005C2.12539 5.37505 2.12539 5.02505 2.35039 4.80005C2.57539 4.57505 2.92539 4.57505 3.15039 4.80005L8.50039 10.025L13.8504 4.75005C14.0754 4.52505 14.4254 4.52505 14.6504 4.75005C14.8754 4.97505 14.8754 5.32505 14.6504 5.55005L8.90039 11.2C8.77539 11.325 8.65039 11.4 8.50039 11.4Z" fill=""></path></svg></button></div></div></div></div><div className="grid grid-cols-12 border-t border-[#EEEEEE] px-5 py-4 dark:border-dark-3 lg:px-7.5 2xl:px-11"><div className="col-span-3"><p className="text-[#637381] dark:text-dark-6">Alex Semuyel</p></div><div className="col-span-3"><p className="text-[#637381] dark:text-dark-6">Applications Engineer</p></div><div className="col-span-3"><p className="text-[#637381] dark:text-dark-6">alex.semuel@example.com</p></div><div className="col-span-2"><p className="text-[#637381] dark:text-dark-6">Admin</p></div><div className="relative col-span-1"><div className=""><div><button className="float-right inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-body-sm text-dark shadow-1 hover:text-primary dark:bg-dark-2 dark:text-white dark:shadow-card">Action<svg className="fill-current" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.50039 11.4C8.35039 11.4 8.22539 11.35 8.10039 11.25L2.35039 5.60005C2.12539 5.37505 2.12539 5.02505 2.35039 4.80005C2.57539 4.57505 2.92539 4.57505 3.15039 4.80005L8.50039 10.025L13.8504 4.75005C14.0754 4.52505 14.4254 4.52505 14.6504 4.75005C14.8754 4.97505 14.8754 5.32505 14.6504 5.55005L8.90039 11.2C8.77539 11.325 8.65039 11.4 8.50039 11.4Z" fill=""></path></svg></button></div></div></div></div></div></div></div>
    </main>
    </DefaultLayout>
    </>);
}