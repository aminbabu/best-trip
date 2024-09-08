import { getPrivacySiteSettings } from "@/actions/site-settings/get-site-settings";
import InnerHTML from "@/components/global/inner-html";
import Container from "@/components/layouts/Container";

const RefundPolicyPage = async () => {
  let refundPolicy = [];

  try {
    const policies = await getPrivacySiteSettings();

    refundPolicy = policies[0]?.["refund-policy"];
  } catch (error) {
  }

  return (
    <main>
      <section className="py-12 lg:py-16">
        <Container>
          <InnerHTML dangerouslySetInnerHTML={{ __html: refundPolicy }} />
        </Container>
      </section>
    </main>
  );
};

export default RefundPolicyPage;
