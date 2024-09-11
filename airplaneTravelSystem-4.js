function airplaneTravelSystem() {
    const hardcodedFlights = [
        [701, 31, 0], // Flight ID, Traveler ID, Extra Bags
        [702, 32, 0],
        [703, 33, 1],
        [704, 31, 2],
        [705, 34, 0],
        [706, 35, 1],
        [707, 32, 0],
        [708, 36, 2],
        [709, 34, 1],
        [710, 33, 0],
        [711, 35, 0],
        [712, 36, 0],
        [713, 31, 3],
        [714, 32, 1]
    ];

    let travelers = new Set();
    let totalPassengers = 0;
    let totalBaggageFees = 0.0;
    const baggageFeePerBag = 40.0; // Fee per extra bag

    for (let i = 0; i < hardcodedFlights.length; i++) {
        const flight = hardcodedFlights[i];
        const flightId = flight[0];
        const travelerId = flight[1];
        const extraBags = flight[2];

        totalPassengers += 1;
        travelers.add(travelerId);
        totalBaggageFees += extraBags * baggageFeePerBag;
    }

    console.log("Airplane Travel:");
    console.log(`Unique travelers: ${travelers.size}`);
    console.log(`Total passengers: ${totalPassengers}`);
    console.log(`Total baggage fees: $${totalBaggageFees.toFixed(2)}`);

    const summaryInfo = {
        uniqueTravelers: travelers.size,
        totalPassengers: totalPassengers,
        totalBaggageFees: totalBaggageFees
    };

    return summaryInfo;
}

const travelSummary = airplaneTravelSystem();
