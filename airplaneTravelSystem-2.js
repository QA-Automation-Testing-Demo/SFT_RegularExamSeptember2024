function airplaneTravelSystem() {
    const hardcodedFlights = [
        [501, 11, 0], // Flight ID, Traveler ID, Extra Bags
        [502, 12, 1],
        [503, 13, 2],
        [504, 11, 3],
        [505, 14, 1],
        [506, 11, 0],
        [507, 12, 2],
        [508, 14, 0],
        [509, 13, 3],
        [510, 11, 1],
        [511, 14, 0],
        [512, 13, 2]
    ];

    let travelers = new Set();
    let totalPassengers = 0;
    let totalBaggageFees = 0.0;
    const baggageFeePerBag = 25.0; // Fee per extra bag

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
