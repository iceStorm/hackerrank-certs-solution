create_sale_summary_report <- function(df_data) {
  # Assuming the Total_sales column is already present in the data as per your screenshot
  # If not, you would uncomment the next line to calculate it
  # df_data$Total_sales <- df_data$Units * df_data$Price
  
  # Group the data by Region and Representative and summarize the total sales
  library(dplyr)
  sales_summary <- df_data %>%
    group_by(Region, Representative) %>%
    summarise(Total_sales = sum(Total_sales)) %>%
    ungroup()

  # For each Region, find the Representative with the maximum sales
  top_sales_representative <- sales_summary %>%
    group_by(Region) %>%
    slice(which.max(Total_sales)) %>%
    ungroup()
  
  # Return the result
  return(top_sales_representative)
}
