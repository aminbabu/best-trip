import {
  getContactSiteSettings,
  getGeneralSiteSettings,
} from "@/actions/site-settings/get-site-settings";
import Footer from "@/components/layouts/Footer";

const WithFooterLayout = async ({ children }) => {
  let generalSiteSettings = [];
  let contactSiteSettings = [];

  try {
    generalSiteSettings = await getGeneralSiteSettings();
    contactSiteSettings = await getContactSiteSettings();
  } catch (error) {
  }

  return (
    <>
      {children}
      <Footer
        generalSiteSettings={generalSiteSettings}
        contactSiteSettings={contactSiteSettings}
      />
    </>
  );
};

export default WithFooterLayout;
