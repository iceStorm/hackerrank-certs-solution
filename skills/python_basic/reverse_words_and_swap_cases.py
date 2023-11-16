
def reverse_words_order_and_swap_cases(sentence):
    words = sentence.split(' ')

    reversedWords = list(reversed(words))
    print(reversedWords)

    final_sentence = ''

    for word in reversedWords:
        for letter in word:
            final_sentence += letter.upper() if letter.islower() else letter.lower()

        final_sentence += ' '

    print('final:', final_sentence)

    return final_sentence.strip()
