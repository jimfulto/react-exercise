export const calculateReward = (cost) => {

    let total = 0;
    total = Math.max(0,cost-50);
    total += Math.max(0,cost-100);

    return total
}

