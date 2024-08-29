import { getUmrahPackageByIdForCustomers } from "@/actions/umrahPackages/get-umrah-packages";
import PackageDetail from "./PackageDetail";

const PackageDetailPage = async ({ params: { id } }) => {
  let umrahPackage;
  try {
    const data = await getUmrahPackageByIdForCustomers(id)
    umrahPackage = data;
  } catch (error) {
  }
  return <PackageDetail umrahPackage={umrahPackage}></PackageDetail>;
};

export default PackageDetailPage;