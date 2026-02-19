package com.rtndevice

import com.facebook.react.BaseReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider

class DevicePackage : BaseReactPackage() {
    override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? {
        return if (name == DeviceModule.NAME) {
            DeviceModule(reactContext)
        } else {
            null
        }
    }

    override fun getReactModuleInfoProvider(): ReactModuleInfoProvider {
        return ReactModuleInfoProvider {
            mapOf(
                    DeviceModule.NAME to
                            ReactModuleInfo(
                                    DeviceModule.NAME,
                                    DeviceModule.NAME,
                                    false, // canOverrideExistingModule
                                    false, // needsEagerInit
                                    true, // hasConstants
                                    false, // isCxxModule
                                    true // isTurboModule
                            )
            )
        }
    }
}
