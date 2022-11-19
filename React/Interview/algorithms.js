const bubble = (L) => {
    let swap = false;
    while (!swap) {
        swap = true
        for (let j in [...L.keys()]) {
            if (L[j-1] > L[j]) {
                swap = false;
                let temp = L[j];
                L[j] = L[j-1];
                L[j-1] = temp;
            }
        }
    }
  return L
}