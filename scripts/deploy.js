async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const PayPool = await ethers.getContractFactory("PayPool");
    const payPool = await PayPool.deploy();
    
    console.log("PayPool deployed to:", payPool.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
