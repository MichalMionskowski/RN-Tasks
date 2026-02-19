import Foundation
import UIKit

@objc(RTNDeviceName)
class RTNDeviceName: NSObject {
    
    @objc
    static func requiresMainQueueSetup() -> Bool {
        return false
    }
    
    @objc
    func getDeviceModel(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        let model = UIDevice.current.model
        let systemName = UIDevice.current.systemName
        resolve("\(systemName) \(model)")
    }
}
