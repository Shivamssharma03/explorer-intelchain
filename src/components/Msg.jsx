const Msg = () => {
    return (
        <div className="p-4">
            <h1 className="mb-4">Information Icons</h1>
            <div className="grid grid-cols-2 gap-4">
                <Iicon message="Average time taken in seconds for a block to be included in the blockchain." />
                <Iicon message="Total number of transactions processed in the blockchain." />
                <Iicon message="The number of active nodes participating in the network." />
                <Iicon message="The total hash rate of the blockchain network." />
                <Iicon message="Current difficulty to mine a new block." />
                <Iicon message="Total supply of tokens currently in circulation." />
                <Iicon message="The number of validators in the consensus network." />
                <Iicon message="The total number of failed transactions." />
                <Iicon message="Average gas price required for transaction processing." />
                <Iicon message="Total number of blocks mined in the past 24 hours." />
                <Iicon message="The current block height of the blockchain." />
                <Iicon message="The average transaction confirmation time." />
            </div>
        </div>
    );
}

export default Msg;   
