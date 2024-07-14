class FileName {
    constructor(head, number, tail) {
        this.head = head;
        this.number = number;
        this.tail = tail;
    }
}

function solution(files) {
    const splitFileArray = files.map((file) => {
        const match = file.match(/(\D+)(\d+)(.*)/);
        return new FileName(match[1], match[2], match[3]);
    });

    splitFileArray.sort((a, b) => {
        const headComparison = a.head.toLowerCase().localeCompare(b.head.toLowerCase());
        if (headComparison !== 0) return headComparison;

        const numberComparison = parseInt(a.number) - parseInt(b.number);
        return numberComparison;
    });

    return splitFileArray.map((file) => file.head + file.number + file.tail);
}
