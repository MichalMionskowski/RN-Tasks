import { useEffect, useState } from "react";
import NativeGetDeviceName from "../NativeGetDeviceName";

export default function useDeviceName() {
  const [deviceName, setDeviceName] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDeviceName() {
      try {
        const name = await NativeGetDeviceName?.getDeviceModel();
        setDeviceName(name || "Unknown Device");
      } catch (error) {
        console.error("Error fetching device name:", error);
      }
    }

    fetchDeviceName();
  }, []);

  return deviceName;
}
