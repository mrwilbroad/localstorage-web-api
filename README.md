# Web Storage API

The localStorage Web API serves as a persistent storage mechanism within web browsers, allowing websites to store key-value pairs locally on a user's device. It maintains data even after the browser window is closed and reopened, offering a convenient way to save information for future visits. This API operates on a simple key-value structure, enabling developers to store strings representing data such as user preferences, settings, or small amounts of application-specific data. While localStorage is accessible across sessions for a specific domain, it’s important to note that it's limited to string values, requiring serialization (e.g., via JSON.stringify()) for complex objects or arrays before storage. Its ease of use, through methods like setItem() and getItem(), makes it a commonly employed tool for retaining non-sensitive user-specific data between visits to a website.



## in addition
However, it's crucial to exercise caution with localStorage due to its accessibility via JavaScript, as any script running on the same domain can access this stored data. Consequently, sensitive information like passwords or confidential user data should not be stored using localStorage. The Same-Origin Policy restricts access to localStorage from different domains, ensuring security within the bounds of a single website but necessitating diligence in handling potentially sensitive information to mitigate any potential risks.




Definition if type for Item to be saved locally
```ts
export type ItemType = {
  name: String;
  value: String ;
};

export type ItemArray = ItemType[];

```

```js
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
```


## regard
<strong>mrwilbroad</strong>