const { expect } = require("chai");

describe("PayPool", function () {
    let PayPool;
    let payPool;
    let owner;
    let addr1;

    beforeEach(async function () {
        PayPool = await ethers.getContractFactory("PayPool");
        [owner, addr1] = await ethers.getSigners();
        payPool = await PayPool.deploy();
        await payPool.deployed();
    });

    it("Should deploy with correct owner", async function () {
        expect(await payPool.owner()).to.equal(owner.address);
    });

    it("Should allow deposits and record them correctly", async function () {
        await payPool.addDepositAddress(addr1.address);
        await payPool.connect(addr1).deposit({ value: ethers.utils.parseEther("1") });

        const history = await payPool.getDepositHistory();
        expect(history.length).to.equal(1);
        expect(history[0].depositor).to.equal(addr1.address);
        expect(history[0].amount).to.equal(ethers.utils.parseEther("1"));
        expect(history[0].status).to.equal(0); // Pending
    });

    // Daha fazla test ekleyebilirsiniz
});
