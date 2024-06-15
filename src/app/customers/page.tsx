import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import TableSix from "@/components/Tables/TableSix";

export default function MessagesPage(){
    return (<>
       <DefaultLayout>
        <main className="mx-auto w-full max-w-[1000px] border border-white">
        <Breadcrumb pageName="Customers" />
        <div className="border border-green-500 m-[1px] p-[1px]">
            <TableSix/>

        </div>
        </main>
    </DefaultLayout>
    </>);
}