import Container from "@/components/layouts/Container";
import DepositForm from "@/components/payment-method/DepositForm";
import { Card, CardContent } from "@/components/ui/card";

const PymentMethodPage = () => {
  return (
    <main className="py-20 bg-secondary min-h-[calc(100vh-93px)]">
      <Container>
        <Card className="text-t-600 border-transparent max-w-3xl mx-auto">
          <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10">
            <h1 className="text-t-800 font-medium text-xl mb-8">
              Payment Method
            </h1>
            <p className="text-t-800 mb-4">Select Payment Method</p>
            <DepositForm />
          </CardContent>
        </Card>
      </Container>
    </main>
  );
};

export default PymentMethodPage;
