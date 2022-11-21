class KeyValuePair2<TKey, TValue> {
    constructor(public key: TKey, public value: TValue) {}
}

let pair2 = new KeyValuePair2<string, string>('1', 'a');
let pair3 = new KeyValuePair2('2', 'b');