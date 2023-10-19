import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Form Elements Page | Next.js E-commerce Dashboard",
  description: "This is Form Elements page for TailAdmin Next.js",
  // other metadata
};

const FormElements = () => {
  return (
    <>
      <Breadcrumb pageName="FormElements" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Input Fields --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
            My Form
              </h3>
            </div>
            
          </div>

      

          
        </div>

        
      </div>
    </>
  );
};

export default FormElements;
