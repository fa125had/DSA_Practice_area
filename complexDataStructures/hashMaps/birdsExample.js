import HashMap from "./HashMap.js";

const birdCensus = new HashMap(16);

birdCensus.assign("mandarin duck", "Central Park Pond");
birdCensus.assign("monk parakeet", "Brooklyn College");
birdCensus.assign("horned owl", "Pelham Bay Park");

birdCensus.retrieve("mandarin duck");
birdCensus.retrieve("monk parakeet");
birdCensus.retrieve("horned owl");