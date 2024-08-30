import { getPrivacySiteSettings } from "@/actions/site-settings/get-site-settings";
import InnerHTML from "@/components/global/inner-html";
import Container from "@/components/layouts/Container";

const TermsAndConditionsPage = async () => {
  let termsAndConditions = [];

  try {
    const policies = await getPrivacySiteSettings();

    termsAndConditions = policies[0]?.["terms-and-conditions"];
  } catch (error) {

  }

  return (
    <main>
      <section className="py-12 lg:py-16">
        <Container>
          <InnerHTML dangerouslySetInnerHTML={termsAndConditions} />
        </Container>
      </section>
    </main>
  );
};

export default TermsAndConditionsPage;
