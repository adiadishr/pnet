const OngoingHero = () => {
    return (
        <div className="mt-[60px] flex py-24 flex-col px-[5%]">
            <h1 className="w-full text-center">Our ongoing projects</h1>
            <table className="w-full">
                <th>
                    <tr>
                        <td>Project</td>
                        <td>Location</td>
                        <td>Capacity</td>
                        <td>Client</td>
                        <td>Description</td>
                    </tr>
                </th>
            </table>
            <div className="flex flex-col">
                <h5>Title</h5>
                <p>Location:</p>
                <p>Capacity:</p>
                <p>Client:</p>
                <p>Year of agreement:</p>
            </div>
        </div>
    )
}

export default OngoingHero