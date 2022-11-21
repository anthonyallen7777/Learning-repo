class ArrayUtils {
    static wrapInArray<T>(value: T) {
        return [value];
    }
}

let numbers4 = ArrayUtils.wrapInArray(1);