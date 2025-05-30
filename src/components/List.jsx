import { useAppContext } from "../context/AppContext";
import Page from "./Page";

function List() {
  const { data } = useAppContext();
  if (!data) return <section></section>;
  return (
    <section>
      <Page />
    </section>
  );
}

export default List;
