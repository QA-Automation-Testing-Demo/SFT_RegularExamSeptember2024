function airplaneTravelSystem() {
    const hardcodedFlights = [
        [601, 21, 1], // Flight ID, Traveler ID, Extra Bags
        [602, 22, 3],
        [603, 23, 0],
        [604, 21, 0],
        [605, 24, 2],
        [606, 25, 3],
        [607, 22, 1],
        [608, 24, 0],
        [609, 23, 2],
        [610, 21, 1]
    ];

    let travelers = new Set();
    let totalPassengers = 0;
    let totalBaggageFees = 0.0;
    const baggageFeePerBag = 35.0; // Fee per extra bag

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
