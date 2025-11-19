let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

let secure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

if (secure) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}
