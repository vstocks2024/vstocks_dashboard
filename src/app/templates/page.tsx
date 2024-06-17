import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import TableTemplates from "@/components/Tables/TableTemplates";


export default function TemplatePage(){
    return (<>
    <DefaultLayout>
    <Breadcrumb pageName="Templates" />
    <TableTemplates/>
    </DefaultLayout>
    </>)
}