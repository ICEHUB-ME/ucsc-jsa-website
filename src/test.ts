export const test = () => {
    console.log("Test function executed.");

    // const foo = (arg: string):string => {
    //     return arg;
    // }

    const foo = <T>(arg: T): T => {
        return arg;
    }

    foo<string>("Hello, World");
}