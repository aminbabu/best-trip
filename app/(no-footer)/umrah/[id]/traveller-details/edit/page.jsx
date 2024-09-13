import Container from "@/components/layouts/Container";
import EditTravelerForm from "@/components/umrah/traveller-details/EditTravelerForm";

const Page = ({ params }) => {
    const { id } = params;
    return <Container><EditTravelerForm id={id} /></Container>;
};

export default Page;