# _English To Pig Latin Translator_

#### _A program to translate a user's input into Pig Latin, 21 Aug 2019_

#### By _**Jason Huels, Jacqueline Remmel, and Lauren Musante**_

## Specifications & Description

* _Make no changes to non-alphabetical characters nor capitalization._
  * _Example input: 3_
  * _Example output: 3_

* _Add "-way" to single-letter words that are a vowel where a vowel is defined as "a," "e," "i," "o," or "u."_
  * _Example input: i_

  * _Example output: iway_
* _Add "-way" to multi-letter words beginning with a vowel._
  * _Example input: and_
  * _Example output: andway_

* _Add "-ay" to single-letter consonants._
  * _Example input: y_
  * _Example output: yay_

* _Add "-ay" to a group of consecutive consonants._
  * _Example input: mt_
  * _Example output: mtay_

* _For a multi-letter word beginning with a consonant, move the first letter to the end of the word and add "-ay."_
  * _Example input: mouse_
  * _Example output: ousemay_

* _For a word beginning with multiple consecutive consonants, move the whole group of consonants from the beginning of the word to the end of the word and add "-ay."_
  * _Example input: tree_
  * _Example output: eetray_

* _For a word beginning with at least one consonant where the first group of consecutive consonants includes a "q" followed by a "u," move the "u" along with the consonants from the beginning of the word to the end of the word and add "-ay."_
  * _Example input: squeak_
  * _Example output: eaksquay_

* _For a multiple-word phrase, apply the above rules to each individual word and return the whole altered phrase._
  * _Example input: Hello World!_
  * _Example output: elloHay orld!Way_

_{This is a detailed description of your application. Its purpose and usage.  Give as much detail as needed to explain what the application does, and any other information you want users or other developers to have. }_

## Setup/Installation Requirements

* _Open the index.html file in the browser of your choosing_


## Technologies Used

_JavaScript, jQuery_

### License

*Open-source

Copyright (c) 2019 **_Jason Huels, Jacqueline Remmel, and Lauren Musante_**
