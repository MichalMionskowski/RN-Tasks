import { TurboModuleRegistry } from "react-native";
import type { TurboModule } from "react-native/Libraries/TurboModule/RCTExport";

export interface Spec extends TurboModule {
  getDeviceModel(): Promise<string>;
}

export default TurboModuleRegistry.get<Spec>("RTNDeviceName") as Spec | null;
