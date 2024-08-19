import {
  getContactSiteSettings,
  getGeneralSiteSettings,
} from "@/actions/site-settings/get-site-settings";
import Footer from "@/components/layouts/Footer";

const WithFooterLayout = async ({ children }) => {
  const generalSiteSettings = await getGeneralSiteSettings();
  const contactSiteSettings = await getContactSiteSettings();

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
