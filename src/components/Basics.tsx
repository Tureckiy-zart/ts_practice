const Basics = () => {


    type Combinable = number | string;
    type ConventionDescriptor = 'as-text' | 'as-number'

    type User = { name: string; age: number };

    function combine(inp1: Combinable, inp2: Combinable, resConvention: ConventionDescriptor) {
        let res
        if ((typeof inp1 === 'number' && typeof inp2 === 'number') || resConvention === 'as-number') { res = +inp1 + +inp2 }
        else {
            res = inp1.toString() + inp2.toString();
        }
        return res
    }
    const combineResStr = combine(42, '-Jay', 'as-text');
    const combineResNum = combine(42, '77', 'as-number');

    const user1: User = { name: 'Jay', age: 21 }
    function greet(user: User) {
        const retUser = `Hi, I am ${user.name}, ${user.age} old `
        return retUser
    }

    return (
        <>
            <p>
                combineRes: {combineResStr}
            </p>
            <p>
                combineRes: {combineResNum}
            </p>
            <p>

                {greet(user1)}
            </p>
        </>
    );
}

export default Basics;