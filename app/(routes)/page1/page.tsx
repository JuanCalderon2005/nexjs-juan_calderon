
const page1 = () => {
    return (
        <div className="d-flex gap-2">
            <h1 className="text-4xl font-bold">My Page 1</h1>
            <a className="btn btn-primary mr-2 text-red-700 text-2xl" href="/">Go to Home</a>
            <a className="btn btn-secondary text-blue-700 text-2xl" href="/page2">Go to Page 2</a>
        </div>
    );
}
export default page1