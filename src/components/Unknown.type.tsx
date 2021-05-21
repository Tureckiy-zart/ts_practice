import { type } from "os";

const Unknown = () => {
    let userInput: unknown;
    let userName: string;
    userInput = 5;
    userInput = 'Man'
    //? userName = userInput 
    if (typeof userInput === 'string') userName = userInput

    function errorGenerator(message: string, code: number): never {
        throw { message, errorCode: code }
    }
    // errorGenerator('An error occured!', 500)


    return (
        <>
            <p>
                {1}
            </p>

        </>
    );
}

export default Unknown;