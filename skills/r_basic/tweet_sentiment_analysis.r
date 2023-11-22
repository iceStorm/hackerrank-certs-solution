library(stringr)

tweets_sentiment_analysis <- function(df_data) {
  # Clean the tweet text
  df_data$tweet_text <- str_to_lower(df_data$tweet_text)
  df_data$tweet_text <- str_replace_all(df_data$tweet_text, "[[:punct:]]", "")
  df_data$tweet_text <- str_split(df_data$tweet_text, "\\s+") # Split text into words
  df_data$tweet_text <- lapply(df_data$tweet_text, function(x) str_trim(x, side = "both"))
  
  # Extract relevant words and filter based on length
  words <- unlist(df_data$tweet_text)
  words <- words[nchar(words) >= 5 & nchar(words) <= 10]
  
  # Create a data frame with unique words
  unique_words <- data.frame(word = unique(words))
  
  # Initialize sentiment columns
  unique_words$positive <- 0
  unique_words$neutral <- 0
  unique_words$negative <- 0
  
  # Update sentiment columns based on tweet_sentiment
  for (word in unique_words$word) {
    positive_count <- sum(df_data$tweet_sentiment == "positive" & grepl(word, df_data$tweet_text))
    neutral_count <- sum(df_data$tweet_sentiment == "neutral" & grepl(word, df_data$tweet_text))
    negative_count <- sum(df_data$tweet_sentiment == "negative" & grepl(word, df_data$tweet_text))
    
    unique_words[unique_words$word == word, "positive"] <- ifelse(positive_count > 0, 1, 0)
    unique_words[unique_words$word == word, "neutral"] <- ifelse(neutral_count > 0, 1, 0)
    unique_words[unique_words$word == word, "negative"] <- ifelse(negative_count > 0, 1, 0)
  }
  
  # Filter for the specified words
  unique_words <- unique_words[unique_words$word %in% c("fashion", "dress", "shoes", "clothes", "shirt"), ]
  
  return(unique_words)
}
