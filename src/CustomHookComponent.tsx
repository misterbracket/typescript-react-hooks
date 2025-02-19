import { useEffect, useMemo, useState } from "react";
export interface Beverage {
  name: string;
  producerName: string;
  beverageName: string;
  beverageColor: string;
  beverageStyle: string;
  producerLocation: string;
  adv: number;
  ibu: number;
  logo: string;
  level: number;
}
function useFetchData<Payload>(
  url: string
): { data: Payload | null; done: boolean } {
  const [data, dataSet] = useState<Payload | null>(null);
  const [done, doneSet] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((d: Payload) => {
        dataSet(d);
        doneSet(true);
      });
  }, [url]);

  return { data, done };
}

function CustomHookComponent() {
  const { data, done } = useFetchData<Beverage[]>("/hv-taplist.json");
  const portlandTaps = useMemo(
    () =>
      (data || []).filter((bev) => bev.producerLocation.includes("Portland")),
    [data]
  );
  return (
    <div>
      {portlandTaps.length && (
        <img src={portlandTaps![0].logo} alt="Beverage Logo" />
      )}
    </div>
  );
}

export default CustomHookComponent;
