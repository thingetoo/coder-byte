/*
This question is asked by Amazon.

Given two strings representing sentences, return the words that are not common to both strings (i.e. the words that only appear in one of the sentences). You may assume that each sentence is a sequence of words (without punctuation) correctly separated using space characters.

Ex: given the following strings...

sentence1 = "the quick", sentence2 = "brown fox", return ["the", "quick", "brown", "fox"]
sentence1 = "the tortoise beat the haire", sentence2 = "the tortoise lost to the haire", return ["beat", "to", "lost"]
sentence1 = "copper coffee pot", sentence2 = "hot coffee pot", return ["copper", "hot"]
*/

var uncommonFromSentences = function(s1, s2) {
  const uncommon = {}
  const results = []

  s1 = s1.split(" ");
  s2 = s2.split(" ");

  for (let i = 0: i < s1.length; i++) {
    uncommon[s1[i]] = true;
  }

  for (let i = 0; i < s2.length; i++) {
    if (uncommon[s2[i]] || uncommon[s2[i]] === null) {
      uncommon[s2[i]] = null;
    } else {
      uncommon[s2[i]] = true
    }
  }
  for (let key in uncommon {
    if (uncommon[key]) {
      results.push(key)
    }
  }
  return results;
};
