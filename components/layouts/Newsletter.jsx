import Container from "./Container";
import NewsletterForm from "./NewsletterForm";

const Newsletter = () => {
  return (
    <section>
      <Container>
        <h2 className="text-3xl lg:text-4xl text-t-800 font-semibold text-center mb-6 lg:mb-8">
          Subscribe to Get Special Price
        </h2>
        <p className="text-t-600 text-center mb-12">
          Do not wanna miss something? Subscribe right now and get special{" "}
          <br className="hidden sm:block" />
          promotion and monthly newalwtter
        </p>
        <NewsletterForm />
      </Container>
    </section>
  );
};

export default Newsletter;
