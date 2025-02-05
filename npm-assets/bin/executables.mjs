/**
 *  Exports a map with all binary variants (platfrom and arch) currently supported by this pacakge
 * platform === process.platform
 * arch === process.arch
 * key of map: `${platform}-${arch}` for faster lookup
 */

export const executables = new Map([
    ['win32-x64', {
        // the path to the executable, relative to the root of the package
        executablePath: "windows/concurrently.exe",
    }], 
    ['darwin-x64', {
        executablePath: "darwin/concurrently",
    }],
    // TODO: Compile on Mac Mini M1
    // ['darwin-arm', {
    //     executable: "darwin-arm/concurrently",
    // }],
    // TODO: Cross-Compile not working yet
    // ['linux-x64', {
    //     executable: "linux/concurrently",
    // }],
    // ['linux-arm', {
    //     executable: "linux-arm/concurrently",
    // }],
    // ['linux-arm64', {
    //     executable: "linux-arm64/concurrently",
    // }],
])