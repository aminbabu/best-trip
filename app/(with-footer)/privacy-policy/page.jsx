import { getPrivacySiteSettings } from "@/actions/site-settings/get-site-settings";
import InnerHTML from "@/components/global/inner-html";
import Container from "@/components/layouts/Container";

const PrivaryPolicyPage = async () => {
  let privacyPolicy = [];

  try {
    const policies = await getPrivacySiteSettings();

    privacyPolicy = policies[0]?.["privacy-policy"];
  } catch (error) {
    console.log(error);
  }

  return (
    <main>
      <section className="py-12 lg:py-16">
        <Container>
          <InnerHTML dangerouslySetInnerHTML={privacyPolicy} />
        </Container>
      </section>
    </main>
  );
};

export default PrivaryPolicyPage;
