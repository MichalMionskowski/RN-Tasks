package com.rtndevice

import android.os.Build
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext

class DeviceModule(reactContext: ReactApplicationContext) : NativeGetDeviceNameSpec(reactContext) {

    override fun getName() = NAME

    override fun getDeviceModel(promise: Promise) {
        val manufacturer: String = Build.MANUFACTURER
        val model: String = Build.MODEL
        promise.resolve("$manufacturer $model")
    }

    companion object {
        const val NAME = "RTNDeviceName"
    }
}
