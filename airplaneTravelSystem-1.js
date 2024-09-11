function airplaneTravelSystem() {
    const hardcodedFlights = [
        [301, 1, 1], // Flight ID, Traveler ID, Extra Bags
        [302, 2, 2],
        [303, 3, 0],
        [304, 1, 1],
        [305, 4, 3],
        [306, 5, 0],
        [307, 2, 2],
        [308, 6, 1],
        [309, 4, 0],
        [310, 3, 1],
        [311, 5, 2],
        [312, 1, 0],
        [313, 6, 3],
        [314, 2, 1],
        [315, 3, 2]
    ];

    let travelers = new Set();
    let totalPassengers = 0;
    let totalBaggageFees = 0.0;
    const baggageFeePerBag = 30.0; // Fee per extra bag

    for (let i = 0; i < hardcodedFlights.length; i++) {
        const flight = hardcodedFlights[i];
        const flightId = flight[0];
        const travelerId = flight[1];
        const extraBags = flight[2];

        totalPassengers += 1;
        travelers.add(travelerId);
        totalBaggageFees += extraBags * baggageFeePerBag;
    }

    console.log("Airplane Travel Summary:");
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