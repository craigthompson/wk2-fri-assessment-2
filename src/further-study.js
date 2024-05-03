// Unit 2 Assessment: further-study.js

// Return a sequence of words arranged according to the rules below.
//
// The sequence starts with the first word in the given array. The next word
// will start with the last letter of the preceding word. For example, these
// are all valid sequences of words:
//
//   king, goblin, nose, eat
//   cute, etcetera, antsy, yak, karat
//
// Sometimes, you'll get a word where there are mutliple candidates for the
// next word. For example, if the words are:
//
//   noon, naan, nun
//
// Then the first word in the sequence is 'noon'.
//
//   noon
//
// And the word after that should be the *first* word that starts with 'n'. So,
// even though both 'naan' and 'nun' start with 'n', the next word should be
// 'naan' because 'naan' appears before 'nun'. The final sequence of words will
// be:
//
//   noon, naan, nun
//
// The sequence will continue in this fashion until it runs out of words or it
// can't find words that'll fit the pattern.
//
// Ex.:
//   buildWordChain(['zoo', 'sour', 'racket', 'octos']);
//   => ['zoo', 'octos', 'sour', 'racket']
function buildWordChain(words) {
  const sequence = [];
  if (words.length > 0) sequence.push(words.shift());

  while (words.length > 0) {
    // Do until the original array has no words left
    const lastWordChar = sequence[sequence.length - 1].at(-1); // get last char of last word in the sequence
    const nextWord = words.filter((word) => word.at(0) === lastWordChar)[0]; // find the next word that starts with the last char of the last word in the sequence
    if (nextWord) {
      sequence.push(nextWord); // If another word was found add it to the sequence
      words.splice(words.indexOf(nextWord), 1); // Remove the found word from the original array
    } else {
      break; // Break out of while loop since another word could not be found that also fit the criteria
    }
  }
  return sequence;
}

export { buildWordChain };
