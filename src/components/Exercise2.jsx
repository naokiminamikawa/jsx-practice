import { devices } from "../data/data.js";

const Exercise2 = () => {
  return (
    <ul>
      {devices
        .filter((device) => device.width >= 700)
        .map((device) =>
          device.price >= 1000 ? (
            <li key={device.id}>{device.name}💰 高級品</li>
          ) : (
            <li key={device.id}>{device.name}🛒 お買い得</li>
          ),
        )}
    </ul>
  );
};

export default Exercise2;
