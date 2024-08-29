import { getPrivacySiteSettings } from "@/actions/site-settings/get-site-settings";
import InnerHTML from "@/components/global/inner-html";
import Container from "@/components/layouts/Container";

const AboutUsPage = async () => {
  let aboutUs = [];

  try {
    const policies = await getPrivacySiteSettings();

    aboutUs = policies[0]?.["about-us"];
  } catch (error) {
  }

  return (
    <main>
      <section className="py-12 lg:py-16">
        <Container>
          <InnerHTML dangerouslySetInnerHTML={aboutUs} />
        </Container>
      </section>
    </main>
  );
};

export default AboutUsPage;
