let cntErrors = 0;

for (let i = 0; i <= 100; i++) {
    const a = Math.round(Math.random() * 1000);
    const b = Math.round(Math.random() * 1000);
    const c = Math.round(Math.random() * 1000);

    const result1 = (a / 100) + (b / 100) + (c / 100);
    const result2 = (c / 100) + (b / 100) + (a / 100);

    if (result1 !== result2) {
        console.log(`${a / 100} + ${b / 100} + ${c / 100} === ${result1}`)
        console.log(`${c / 100} + ${b / 100} + ${a / 100} === ${result2}`)
        console.log('\n')
        cntErrors++;
    }
}
