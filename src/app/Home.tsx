import { useEffect, useState } from "react";
import { ItemArray, ItemType } from "../types/Items";

const Home = () => {
  const [items, setItems] = useState([] as ItemArray);
  const SaveLocally = () => {
    if (!get()) {
      var startdata = {
        name: `Test-${Math.random() * 100}`,
        value: `Value-${Math.random() * 100}`,
      };
      StoreLocally([startdata]);
      setItems([startdata]);
    } else {
      let data_item: ItemArray = get()!;
      var Item = {
        name: `Test-${Math.random() * 100}`,
        value: `Value-${Math.random() * 100}`,
      };
      data_item.push(Item);
      StoreLocally(data_item);
      setItems(data_item);
    }
  };

  const StoreLocally = (data: ItemArray): null => {
    localStorage.setItem("user_data_local", JSON.stringify(data));
    return null;
  };

  const get = (): null | ItemArray => {
    if (window.localStorage.getItem("user_data_local")) {
      return JSON.parse(window.localStorage.getItem("user_data_local")!);
    }
    return null;
  };

  const ClearCache = ()=> {
    localStorage.clear();
  }

  useEffect(() => {
    if (get()) {
        setItems(get()!);
      }
  }, []);

  return (
    <div className="container p-2 border">
      <p>Local storage usage..</p>
      <p>
        
      </p>

      <section className="mt-3 vstack gap-3">
        <section>
         <section className="hstack gap-2">
         <button
            onClick={SaveLocally}
            type="button"
            className="btn btn-outline-success"
          >
            Save locally!
          </button>
          <button
            onClick={ClearCache}
            type="button"
            className="btn btn-outline-danger"
          >
            Clear cache!
          </button>
         </section>

          <ul>
            {items!.length > 0 &&
              items!.map((item, index) => {
                return (
                  <li key={index}>
                    {item.name} : {item.value}
                  </li>
                );
              })}
          </ul>
        </section>
      </section>
    </div>
  );
};

export default Home;
