import Container from "@/components/layouts/Container";
import data from "@/data/qna.json";

const PrivaryPolicyPage = () => {
  return (
    <main>
      <section className="py-12 lg:py-16">
        <Container>
          <ul className="space-y-8">
            {data?.map((item, index) => (
              <li key={index} className="space-y-3.5">
                <h2 className="text-lg text-t-800 font-semibold">
                  {item.question}
                </h2>
                <p className="text-t-600">{item.answer}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </main>
  );
};

export default PrivaryPolicyPage;
