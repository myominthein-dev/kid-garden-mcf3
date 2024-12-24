import { HiInbox } from "react-icons/hi2";
import Container from "../../../components/Container";
import ModuleButton from "../components/ModuleButton";
import LogoutButton from "../../../components/LogoutButton";
import { LuUsers } from "react-icons/lu";

const DashboardPage = () => {
  return (
    <section>
      <Container>
        <div className=" grid  grid-cols-2 md:grid-cols-3 gap-5 mb-10">
          <div className=" col-span-1 row-span-1">
            <ModuleButton
              name={"Brand Module"}
              icon={<HiInbox className=" size-14" />}
              url={"/dashboard/brands"}
            />
          </div>

          <div className=" col-span-1 row-span-1">
            <ModuleButton
              name={"User Profile"}
              icon={<LuUsers className=" size-14" />}
              url={"/dashboard/user-profile"}
            />
          </div>
        </div>

        <div className="flex gap-3 items-center justify-end">
          <p>If you finish your job, just </p>
          <LogoutButton />
        </div>
      </Container>
    </section>
  );
};

export default DashboardPage;
