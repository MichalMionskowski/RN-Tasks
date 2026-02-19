#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(RTNDeviceName, NSObject)

RCT_EXTERN_METHOD(getDeviceModel:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
