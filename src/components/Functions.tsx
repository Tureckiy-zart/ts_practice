const UnionAliases = () => {

  function add(a: number, b: number) {
    // return (a + b).toString()
    return (a + b)
  }


  function print(num: number): void {
    console.log('Result :>>', +num);
  }

  function printVithReturn(num: number): string {
    return ` Result :>> ${+num}`
  }
  console.log('print(add(40, 2)) :>> ', print(add(40, 2)));
  let combineValues: (a: number, b: number) => number;
  combineValues = add
  // combineValues = printVithReturn
  console.log('combineValues(8,8) :>> ', combineValues(8, 8));

  function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const res = n1 + n2
    console.log('cb(res) :>> ', cb(res));

    return (res)
  }

  const retAndHandle = addAndHandle(40, 2, (res) => { console.log(`res`, res) })


  return (
    <>
      <p>{printVithReturn(add(40, 2))}</p>
      <p>{retAndHandle}</p>
    </>
  );
};

export default UnionAliases;
