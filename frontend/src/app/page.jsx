import FormTask from "./components/FormTask";
import ListTask from "./components/ListTask";

export const dynamic = "force-dynamic";

function HomePage() {
  return (
    <div className="container mx-auto">
      <div>front App</div>
      <div className="flex gap-x-10">
        <FormTask />
        <ListTask />
      </div>
    </div>
  );
}

export default HomePage;
