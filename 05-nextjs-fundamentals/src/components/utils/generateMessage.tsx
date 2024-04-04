const dolphinFacts = [
  'Dolphins have some of the most elaborate acoustic abilities in the animal kingdom. They make a variety of sounds including whistles, clicks, squawks, squeaks, moans, barks, groans and yelps.',
  "Bottlenose dolphins are one of the few species, along with apes and humans, that have the ability to recognise themselves in a mirror. This is considered 'reflective' of their intelligence. Dolphins are also among the few animals that have been documented using tools. In Shark Bay in Western Australia, dolphins fit marine sponges over their beaks to protect them from sharp, harmful rocks as they forage for fish.",
  "Bottlenose dolphins sleep with one half of their brain at a time, and keep one eye open. It's believed they do this to keep an eye out for their group - to make sure they stick together - and to look out for predators like sharks."
];

let curFact = 0;

export function generateMessage() {
  return {
    subject: `Dolphin fact #${++curFact}`,
    body: dolphinFacts[curFact % dolphinFacts.length],
    read: false
  };
}
