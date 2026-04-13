import "@/App.css";
import { Layout } from "@/shared";
import { ProjectsListContainer } from "@/features/projects";
import Tabs from "@/shared/components/Tabs";
import { TicketsListContainer } from "@/features/tickets";

function App() {
  return (
    <Layout>
      <Tabs defaultTab="projects">
        <Tabs.List>
          <Tabs.Tab id="projects">Projectos</Tabs.Tab>
          <Tabs.Tab id="Tickets">Tiquetes</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel id="projects">
          <ProjectsListContainer />
        </Tabs.Panel>
        <Tabs.Panel id="Tickets">
          <TicketsListContainer />
        </Tabs.Panel>
      </Tabs>
    </Layout>
  );
}

export default App;
